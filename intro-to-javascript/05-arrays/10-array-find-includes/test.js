test("find and includes return the expected values", () => {
  assert.equal(firstLargePrice, 75, "firstLargePrice should be the first price above 50");
  assert.equal(hasForty, true, "hasForty should be true");
});

test("#output shows the search results", () => {
  const out = document.getElementById("output");
  assert.exists(out);
  assert.equal(out.textContent.trim(), '75 | true', "#output should show the find and includes results");
});
