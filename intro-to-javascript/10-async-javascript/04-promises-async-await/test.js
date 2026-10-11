test("delay fulfills only after its requested timer", async () => {
  await globalThis.initialBroadcast;
  const original = globalThis.setTimeout;
  const timers = [];
  try {
    globalThis.setTimeout = (callback, ms) => { timers.push({ callback, ms }); return 1; };
    for (const [ms, value] of [[0, "ok"], [25, 0], [7, { label: "same object" }]]) {
      let settled = false;
      const promise = globalThis.delay(ms, value);
      assert.equal(promise instanceof Promise, true, "Return a Promise");
      const pending = promise.then(result => { settled = true; return result; });
      pending.catch(() => {});
      for (let i = 0; i < 8; i++) await Promise.resolve();
      assert.equal(settled, false, "Wait for the timer");
      const timer = timers.shift();
      assert.equal(timer?.ms, ms, "Pass ms to setTimeout");
      timer.callback();
      assert.equal(await pending, value, "Resolve with the original value");
    }
    assert.equal(timers.length, 0, "Schedule one timer per delay call");
  } finally { globalThis.setTimeout = original; }
});
test("loadMessage awaits and transforms the received text", async () => {
  await globalThis.initialBroadcast;
  const original = globalThis.delay;
  let release;
  const gate = new Promise(resolve => { release = resolve; });
  let pending;
  try {
    const calls = [];
    globalThis.delay = (ms, text) => { calls.push([ms, text]); return gate; };
    pending = globalThis.loadMessage();
    assert.equal(pending instanceof Promise, true, "Return an async result");
    let settled = false;
    pending.then(() => { settled = true; }, () => { settled = true; });
    await Promise.resolve();
    assert.equal(JSON.stringify(calls), '[[10,"Hello Async"]]', "Request the supplied message");
    assert.equal(settled, false, "Await the pending message");
    release("Late news");
    assert.equal(await pending, "LATE NEWS", "Transform the received text, not a fixed answer");
    globalThis.delay = async () => { throw new Error("No message"); };
    let caught;
    try { await globalThis.loadMessage(); } catch (error) { caught = error; }
    assert.equal(caught?.message, "No message", "Let the rejection reach the caller");
  } finally { release("cleanup"); if (pending) await pending.catch(() => {}); globalThis.delay = original; }
});
test("safeDivide fulfills with varied quotients", async () => {
  for (const [a, b, expected] of [[10, 2, 5], [9, -2, -4.5], [0, 3, 0]]) {
    const pending = globalThis.safeDivide(a, b);
    assert.equal(pending instanceof Promise, true, "Use an async function");
    assert.equal(await pending, expected, "Return a / b");
  }
});
test("safeDivide rejects zero divisors", async () => {
  for (const b of [0, -0]) {
    const pending = globalThis.safeDivide(10, b);
    assert.equal(pending instanceof Promise, true, "Reject through a Promise");
    let error;
    try { await pending; } catch (caught) { error = caught; }
    assert.equal(error instanceof Error, true, "Reject with an Error");
    assert.equal(error.message, "Division by zero");
  }
});
test("reports the awaited helper results", async () => {
  await globalThis.initialBroadcast;
  const original = { log: console.log, load: globalThis.loadMessage, divide: globalThis.safeDivide };
  const lines = [];
  try {
    console.log = (...args) => lines.push(args.join(" "));
    for (const [message, quotient] of [["HELLO ASYNC", 5], ["NEWS", 8]]) {
      globalThis.loadMessage = async () => message;
      globalThis.safeDivide = async (a, b) => { assert.equal(a, 10); assert.equal(b, 2); return quotient; };
      await globalThis.reportBroadcast();
    }
    assert.equal(lines.join("\n"), "HELLO ASYNC | 10/2 = 5\nNEWS | 10/2 = 8", "Log the values returned by both helpers");
  } finally { console.log = original.log; globalThis.loadMessage = original.load; globalThis.safeDivide = original.divide; }
});
