test("delay resolves with its value after a timer", async () => {
  const before = Date.now();
  assert.equal(await globalThis.delay(10, "ok"), "ok", "Resolve with the given value");
  assert.equal(Date.now() - before >= 8, true, "Wait for the timer before resolving");
});
test("loadMessage returns uppercase text", async () => {
  assert.equal(await globalThis.loadMessage(), "HELLO ASYNC", "Await and uppercase the message");
});
test("safeDivide resolves a quotient", async () => {
  assert.equal(await globalThis.safeDivide(10, 2), 5, "Resolve to 5");
});
test("safeDivide rejects on zero", async () => {
  let error;
  try { await globalThis.safeDivide(10, 0); } catch (caught) { error = caught; }
  assert.equal(error?.message, "Division by zero", "Reject with Division by zero");
});
test("logs the awaited broadcast", async () => {
  // Invoke the replayable reporting function to capture its async console output.
  const lines = [];
  const original = console.log;
  console.log = (...args) => { lines.push(args.join(" ")); original(...args); };
  try {
    await globalThis.reportBroadcast();
    assert.includes(lines.join("\n"), "HELLO ASYNC | 10/2 = 5", "Log the awaited result");
  } finally { console.log = original; }
});
