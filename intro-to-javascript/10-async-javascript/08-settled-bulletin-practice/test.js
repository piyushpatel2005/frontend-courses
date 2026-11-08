test("starts every feed and waits through a rejection", async () => {
  await globalThis.initialFeeds;
  const original = globalThis.getFeed; const started = []; let release;
  const gate = new Promise(resolve => { release = resolve; }); let pending;
  try {
    globalThis.getFeed = name => {
      started.push(name);
      return name === "press" ? Promise.reject(new Error("Offline")) : gate.then(() => name);
    };
    let completed = false;
    pending = globalThis.compileFeeds(["stage", "press", "voting"]);
    Promise.resolve(pending).then(() => { completed = true; }, () => { completed = true; });
    for (let i = 0; i < 12; i++) await Promise.resolve();
    assert.equal(started.length, 3, "Start each feed once before waiting");
    assert.equal(["stage","press","voting"].every(name => started.includes(name)), true);
    assert.equal(completed, false, "Keep waiting for other feeds when one rejects");
    release();
    await pending;
  } finally { release(); await Promise.resolve(pending).catch(() => {}); globalThis.getFeed = original; }
});
async function checkCollection(field) {
  await globalThis.initialFeeds;
  const original = globalThis.getFeed;
  try {
    for (const names of [[], ["a"], ["bad"], ["bad","a","bad2","b","a"]]) {
      globalThis.getFeed = async name => {
        if (name.startsWith("bad")) throw new Error("Offline");
        return name.toUpperCase();
      };
      const result = await globalThis.compileFeeds(names);
      const expected = field === "headlines"
        ? names.filter(n => !n.startsWith("bad")).map(n => n.toUpperCase())
        : names.filter(n => n.startsWith("bad"));
      assert.equal(JSON.stringify(result?.[field]), JSON.stringify(expected), "Keep " + field + " in input order, including duplicates");
    }
    const controls = {};
    globalThis.getFeed = name => new Promise((resolve, reject) => { controls[name] = {resolve, reject}; });
    const pending = globalThis.compileFeeds(["first","second"]);
    Promise.resolve(pending).catch(() => {});
    if (field === "headlines") {
      controls.second.resolve("Second"); controls.first.resolve("First");
    } else {
      controls.second.reject(new Error("Second")); controls.first.reject(new Error("First"));
    }
    const expected = field === "headlines" ? "First,Second" : "first,second";
    assert.equal((await pending)?.[field]?.join(","), expected, "Completion order must not reorder " + field);
  } finally { globalThis.getFeed = original; }
}
test("collects successful headlines in input order", () => checkCollection("headlines"));
test("collects failed names in input order", () => checkCollection("failed"));
test("reports the supplied feed result", async () => {
  await globalThis.initialFeeds;
  const original = globalThis.compileFeeds; const log = console.log; const lines = [];
  try {
    console.log = (...args) => lines.push(args.join(" "));
    for (const result of [{headlines:["Stage ready","Votes counted"],failed:["press"]}, {headlines:["New headline"],failed:["other"]}]) {
      globalThis.compileFeeds = async names => { assert.equal(names.join(","), "stage,press,voting"); return result; };
      await globalThis.reportFeeds();
    }
    assert.equal(lines.join("\n"), "Headlines: Stage ready, Votes counted | failed: press\nHeadlines: New headline | failed: other", "Format the returned arrays");
  } finally { globalThis.compileFeeds = original; console.log = log; }
});
