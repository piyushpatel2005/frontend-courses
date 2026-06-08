test("slice and concat return the expected arrays", () => {
  assert.deepEqual(middleNumbers, [2, 3, 4], "middleNumbers should contain the sliced middle values");
  assert.deepEqual(combinedNumbers, [2, 3, 4, 10, 11], "combinedNumbers should include the concatenated values");
});

test("#output shows the concatenated result", () => {
  const out = document.getElementById("output");
  assert.exists(out);
  assert.equal(out.textContent.trim(), '[2,3,4,10,11]', "#output should show the combined array as JSON");
});
