test("forEach and map build the expected arrays", () => {
  assert.deepEqual(labels, ['Number: 1', 'Number: 2', 'Number: 3'], "labels should be built with forEach");
  assert.deepEqual(doubledNumbers, [2, 4, 6], "doubledNumbers should be built with map");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "Number: 1, Number: 2, Number: 3 | [2,4,6]", "Log the mission result with console.log()");
});
