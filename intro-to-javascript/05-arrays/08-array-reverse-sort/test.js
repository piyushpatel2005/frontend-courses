test("sorted and reversed arrays are correct", () => {
  assert.deepEqual(sortedNumbers, [1, 2, 3, 4], "sortedNumbers should be ascending");
  assert.deepEqual(reversedNumbers, [4, 3, 2, 1], "reversedNumbers should be descending");
});

test("#output shows both array orders", () => {
  const out = document.getElementById("output");
  assert.exists(out);
  assert.equal(out.textContent.trim(), '[1,2,3,4] | [4,3,2,1]', "#output should show the sorted and reversed arrays");
});
