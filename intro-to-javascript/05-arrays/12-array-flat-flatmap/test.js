test("flat and flatMap transform the arrays correctly", () => {
  assert.deepEqual(flatNumbers, [1, 2, 3, 4], "flatNumbers should flatten one level");
  assert.deepEqual(splitWords, ['hello', 'world', 'js'], "splitWords should contain the flattened words");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "[1,2,3,4] | [\"hello\",\"world\",\"js\"]", "Log the mission result with console.log()");
});
