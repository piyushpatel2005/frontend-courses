test("totalPrice uses arithmetic operators correctly", () => {
  assert.equal(totalPrice, 63, "totalPrice should equal 63");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "63", "Log the mission result with console.log()");
});
