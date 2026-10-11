test("schedules the delayed entry before finishing", async () => {
  const original = globalThis.setTimeout;
  const scheduled = [];
  try {
    globalThis.setTimeout = (callback, ms) => { scheduled.push({ callback, ms }); return 1; };
    const order = ["Opening"];
    let calls = 0;
    globalThis.scheduleDelayed(order, () => { calls++; assert.equal(order.join("|"), "Opening|Closing|Delayed"); });
    assert.equal(order.join("|"), "Opening", "Do not append Delayed immediately");
    assert.equal(calls, 0, "Do not finish before the timer fires");
    assert.equal(scheduled.length, 1, "Schedule one timer");
    assert.equal(scheduled[0].ms, 0, "Use a zero-delay timer");
    order.push("Closing");
    scheduled[0].callback();
    assert.equal(calls, 1, "Call finish once, after appending Delayed");
  } finally { globalThis.setTimeout = original; }
});
test("logs the supplied broadcast order", () => {
  const original = console.log;
  const lines = [];
  try {
    console.log = (...args) => lines.push(args.join(" "));
    globalThis.logBroadcast(["Start", "End", "Delayed"]);
    globalThis.logBroadcast(["News", "Weather"]);
    assert.equal(lines.join("\n"), "Start | End | Delayed\nNews | Weather", "Join and log the supplied array");
  } finally { console.log = original; }
});
