test("sorted and reversed arrays are correct", () => {
  assert.deepEqual(sortedNumbers, [1, 2, 3, 4], "sortedNumbers should be ascending");
  assert.deepEqual(reversedNumbers, [4, 3, 2, 1], "reversedNumbers should be descending");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "[1,2,3,4] | [4,3,2,1]", "Log the mission result with console.log()");
});
