test("returns a successful API result", async () => {
  const api = globalThis.createScoreApi(0);
  const result = await globalThis.deliverScore(api, 87, 3);
  assert.equal(result?.score, 87, "Return the saved score");
  assert.equal(api.calls(), 1, "Stop after the first success");
});
test("retries transient failures sequentially", async () => {
  let active = 0;
  let calls = 0;
  const api = async score => {
    calls += 1;
    active += 1;
    assert.equal(active, 1, "Await each attempt before starting another");
    await new Promise(resolve => setTimeout(resolve, 1));
    active -= 1;
    if (calls < 3) throw new Error("Temporary outage");
    return { score, attempts: calls };
  };
  const result = await globalThis.deliverScore(api, 87, 3);
  assert.equal(result?.attempts, 3, "Succeed on the third attempt");
  assert.equal(calls, 3, "Stop on success");
});
test("rethrows the last original error on exhaustion", async () => {
  const lastError = new Error("Permanently offline");
  let calls = 0;
  const api = async () => { calls++; throw calls === 2 ? lastError : new Error("Earlier outage"); };
  let caught;
  try { await globalThis.deliverScore(api, 87, 2); } catch (error) { caught = error; }
  assert.equal(caught, lastError, "Throw the last original error");
  assert.equal(calls, 2, "Respect the attempt budget");
});
test("rejects an empty budget without calling the API", async () => {
  const unused = globalThis.createScoreApi(0);
  let error;
  try { await globalThis.deliverScore(unused, 87, 0); } catch (caught) { error = caught; }
  assert.equal(error?.message, "No attempts allowed", "Reject a zero budget");
  assert.equal(unused.calls(), 0, "Do not call the API");
});
test("logs the successful score delivery", async () => {
  const lines = []; const original = console.log;
  console.log = (...args) => { lines.push(args.join(" ")); original(...args); };
  try {
    await globalThis.reportDelivery();
    assert.includes(lines.join("\n"), "Score 87 saved after 3 attempts", "Log the result after retrying");
  } finally { console.log = original; }
});
