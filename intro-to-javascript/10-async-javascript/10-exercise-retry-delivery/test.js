test("returns a first-attempt success unchanged", async () => {
  for (const score of [0, 87, -3]) {
    const expected = {score, marker:"original"}; let calls = 0;
    const pending = globalThis.deliverScore(async received => {
      calls++; assert.equal(received, score, "Pass the score to the API"); return expected;
    }, score, 1);
    assert.equal(pending instanceof Promise, true, "Return an async result");
    assert.equal(await pending, expected, "Return the original API result");
    assert.equal(calls, 1, "Stop on the first success");
  }
});
test("retries only after rejection and stops at success", async () => {
  const controls = []; let calls = 0; let pending;
  const api = score => {
    calls++;
    assert.equal(score, 31);
    return new Promise((resolve, reject) => controls.push({resolve, reject}));
  };
  try {
    pending = globalThis.deliverScore(api, 31, 4);
    Promise.resolve(pending).catch(() => {});
    for (let i = 0; i < 8; i++) await Promise.resolve();
    assert.equal(calls, 1, "Do not launch concurrent attempts");
    controls[0].reject(new Error("First failure"));
    for (let i = 0; i < 8; i++) await Promise.resolve();
    assert.equal(calls, 2, "Retry after the first rejection");
    controls[1].reject(new Error("Second failure"));
    for (let i = 0; i < 8; i++) await Promise.resolve();
    assert.equal(calls, 3, "Retry after the second rejection");
    controls[2].resolve({score:31, attempts:3});
    assert.equal((await pending)?.attempts, 3);
    assert.equal(calls, 3, "Do not use the spare attempt after success");
  } finally {
    controls.forEach(control => control.resolve({score:31,attempts:calls}));
    await Promise.resolve(pending).catch(() => {});
  }
});
test("throws the last original error at the budget boundary", async () => {
  for (const budget of [1, 2, 4]) {
    const last = new Error("Final outage"); let calls = 0; let caught;
    const api = async () => { calls++; throw calls === budget ? last : new Error("Earlier outage"); };
    try { await globalThis.deliverScore(api, 42, budget); } catch (error) { caught = error; }
    assert.equal(calls, budget, "Respect the exact attempt limit");
    assert.equal(caught, last, "Preserve the last original error object");
  }
});
test("rejects invalid budgets without using the API", async () => {
  for (const budget of [0, -1, 1.5, NaN, Infinity, "3", undefined]) {
    let calls = 0; let caught;
    const api = async () => { calls++; return {}; };
    try { await globalThis.deliverScore(api, 7, budget); } catch (error) { caught = error; }
    assert.equal(caught instanceof Error, true, "Reject with an Error");
    assert.equal(caught.message, "No attempts allowed");
    assert.equal(calls, 0, "Validate the budget before calling the API");
  }
});
test("reports the returned score and attempt count", async () => {
  await globalThis.initialDelivery;
  const original = globalThis.deliverScore; const log = console.log; const lines = [];
  try {
    console.log = (...args) => lines.push(args.join(" "));
    for (const result of [{score:87,attempts:3}, {score:19,attempts:2}]) {
      globalThis.deliverScore = async (api, score, limit) => {
        assert.equal(score, 87); assert.equal(limit, 3);
        let failures = 0;
        for (let i = 0; i < 3; i++) { try { await api(score); } catch { failures++; } }
        assert.equal(failures, 2, "Use createScoreApi(2)");
        return result;
      };
      await globalThis.reportDelivery();
    }
    assert.equal(lines.join("\n"), "Score 87 saved after 3 attempts\nScore 19 saved after 2 attempts", "Log fields from the returned result");
  } finally { globalThis.deliverScore = original; console.log = log; }
});
