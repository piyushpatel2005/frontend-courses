test("Math.ceil rounds upward", () => {
  assert.match(OUTPUT, /^CHECK 1: 5$/m, "Log CHECK 1 from roundedUp");
});
test("Date provides the UTC year", () => {
  assert.match(OUTPUT, /^CHECK 2: 2024$/m, "Log CHECK 2 from launchYear");
});

test("logs the mission result", () => {
  assert.match(OUTPUT, /^5 \| 2024$/m, "Log the values on their own line");
});
