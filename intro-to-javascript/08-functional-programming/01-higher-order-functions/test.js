test("makeMultiplier returns a working function", () => {
  assert.equal(typeof makeMultiplier, "function", "Define makeMultiplier as a function");
  const triple = makeMultiplier(3);
  assert.equal(triple(7), 21, "The returned function should multiply the value");
});

test("#output shows the multiplied result", () => {
  const out = document.getElementById("output");
  assert.exists(out);
  assert.equal(out.textContent.trim(), '21', "#output should show the multiplied result");
});
