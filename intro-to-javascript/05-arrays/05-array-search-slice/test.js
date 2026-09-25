test("slice and concat return the expected arrays", () => {
  assert.deepEqual(middleNumbers, [2, 3, 4], "middleNumbers should contain the sliced middle values");
  assert.deepEqual(combinedNumbers, [2, 3, 4, 10, 11], "combinedNumbers should include the concatenated values");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "[2,3,4,10,11]", "Log the mission result with console.log()");
});
