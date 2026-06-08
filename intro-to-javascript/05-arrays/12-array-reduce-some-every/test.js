test("reduce, some, and every compute the expected values", () => {
  assert.equal(total, 30, "total should sum the array values");
  assert.equal(hasAdult, true, "hasAdult should be true");
  assert.equal(allPositive, true, "allPositive should be true");
});

test("#output shows the combined summary", () => {
  const out = document.getElementById("output");
  assert.exists(out);
  assert.equal(out.textContent.trim(), '30 | true | true', "#output should show all three summary values");
});
