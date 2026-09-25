test("makeMultiplier returns a working function", () => {
  assert.equal(typeof makeMultiplier, "function", "Define makeMultiplier as a function");
  const triple = makeMultiplier(3);
  assert.equal(triple(7), 21, "The returned function should multiply the value");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "21", "Log the mission result with console.log()");
});
