test("callback resolves with actual execution order", async () => {
  assert.equal(typeof globalThis.runBroadcast, "function", "Define runBroadcast");
  let settled = false;
  const pending = globalThis.runBroadcast().then(order => { settled = true; return order; });
  await Promise.resolve();
  await Promise.resolve();
  assert.equal(settled, false, "Resolve in a timer, not synchronously or in a microtask");
  const order = await pending;
  assert.equal(order.join(" | "), "Start | End | Delayed", "Push Delayed in the timer callback");
});
test("callback logs the completed order", async () => {
  const lines = [];
  const original = console.log;
  console.log = (...args) => { lines.push(args.join(" ")); original(...args); };
  try {
    await globalThis.runBroadcast();
    assert.includes(lines.join("\n"), "Start | End | Delayed", "Log inside the callback");
  } finally { console.log = original; }
});
