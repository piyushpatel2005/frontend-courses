test("starter values are created", () => {
  assert.equal(firstMessage, "Ada", "Set firstMessage to Ada");
  assert.equal(divisionResult, 25, "divisionResult should equal 25");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "Ada | 25", "Log the mission result with console.log()");
});
