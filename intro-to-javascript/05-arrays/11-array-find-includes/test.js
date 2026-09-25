test("find and includes return the expected values", () => {
  assert.equal(firstLargePrice, 75, "firstLargePrice should be the first price above 50");
  assert.equal(hasForty, true, "hasForty should be true");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "75 | true", "Log the mission result with console.log()");
});
