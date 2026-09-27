test("starts every feed and waits for all outcomes", async () => {
  assert.equal(typeof globalThis.compileFeeds, "function", "Define compileFeeds");
  const original = globalThis.getFeed;
  const started = [];
  let release;
  const gate = new Promise(resolve => { release = resolve; });
  try {
    globalThis.getFeed = name => {
      started.push(name);
      return name === "press" ? Promise.reject(new Error("Offline")) : gate.then(() => `${name} ready`);
    };
    let completed = false;
    const pending = globalThis.compileFeeds(["stage", "press", "voting"]).then(value => {
      completed = true;
      return value;
    });
    await Promise.resolve();
    await Promise.resolve();
    assert.equal(started.join(", "), "stage, press, voting", "Start all providers before waiting for results");
    assert.equal(completed, false, "Wait for the remaining providers after one rejects");
    release();
    const result = await pending;
    assert.equal(result?.headlines?.join(", "), "stage ready, voting ready", "Preserve successful feeds");
  } finally {
    release();
    globalThis.getFeed = original;
  }
});
test("returns failed names in input order", async () => {
  const result = await globalThis.compileFeeds(["press", "weather", "unknown", "stage"]);
  assert.equal(result?.headlines?.join(", "), "Clear skies, Stage ready", "Keep the requested order");
  assert.equal(result?.failed?.join(", "), "press, unknown", "Record both failed providers in input order");
});
test("logs the award feed report", async () => {
  const lines = []; const original = console.log;
  console.log = (...args) => { lines.push(args.join(" ")); original(...args); };
  try {
    await globalThis.reportFeeds();
    assert.includes(lines.join("\n"), "Headlines: Stage ready, Votes counted | failed: press", "Log partial results");
  } finally { console.log = original; }
});
