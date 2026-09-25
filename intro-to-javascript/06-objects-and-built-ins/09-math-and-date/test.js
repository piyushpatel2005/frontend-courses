test("Math and Date values are correct", () => {
  assert.equal(roundedUp, 5, "roundedUp should be 5");
  assert.equal(launchYear, 2024, "launchYear should be 2024");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "5 | 2024", "Log the mission result with console.log()");
});
