test("variables are declared and updated", () => {
  assert.equal(favoriteFood, "tacos", "favoriteFood should be tacos");
  assert.equal(favoriteNumber, 8, "favoriteNumber should be reassigned to 8");
});

test("#output shows both variable values", () => {
  const out = document.getElementById("output");
  assert.exists(out);
  assert.equal(out.textContent.trim(), "tacos | 8", "#output should show the food and updated number");
});
