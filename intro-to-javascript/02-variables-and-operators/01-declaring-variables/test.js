test("variables are declared and updated", () => {
  assert.equal(favoriteFood, "tacos", "favoriteFood should be tacos");
  assert.equal(favoriteNumber, 8, "favoriteNumber should be reassigned to 8");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "tacos | 8", "Log the mission result with console.log()");
});
