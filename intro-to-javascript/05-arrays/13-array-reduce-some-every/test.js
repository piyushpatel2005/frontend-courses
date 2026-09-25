test("reduce, some, and every compute the expected values", () => {
  assert.equal(total, 30, "total should sum the array values");
  assert.equal(hasAdult, true, "hasAdult should be true");
  assert.equal(allPositive, true, "allPositive should be true");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "30 | true | true", "Log the mission result with console.log()");
});
