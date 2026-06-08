test("makeCounter returns an independent counter function", () => {
  assert.equal(typeof makeCounter, "function", "Define makeCounter as a function");
  const counter = makeCounter();
  assert.equal(counter(), 1, "The first call should return 1");
  assert.equal(counter(), 2, "The second call should return 2");
});

test("#output shows three counter results", () => {
  const out = document.getElementById("output");
  assert.exists(out);
  assert.equal(out.textContent.trim(), "1 | 2 | 3", "#output should show the closure count sequence");
});
