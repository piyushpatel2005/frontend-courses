test("delay resolves with the provided value", async () => {
  const value = await delay(1, "ok");
  assert.equal(value, "ok", "delay should resolve to provided value");
});

test("loadMessage returns uppercase message", async () => {
  const msg = await loadMessage();
  assert.equal(msg, "HELLO ASYNC", "loadMessage should return 'HELLO ASYNC'");
});

test("safeDivide resolves when divisor is non-zero", async () => {
  const result = await safeDivide(10, 2);
  assert.equal(result, 5, "safeDivide(10,2) should resolve to 5");
});

test("safeDivide rejects on division by zero", async () => {
  try {
    await safeDivide(10, 0);
    assert.fail("safeDivide(10,0) should reject");
  } catch (err) {
    assert.equal(err.message, "Division by zero",
      "Error message should be 'Division by zero'");
  }
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "HELLO ASYNC | 10/2 = 5", "Log the mission result with console.log()");
});
