test("flat and flatMap transform the arrays correctly", () => {
  assert.deepEqual(flatNumbers, [1, 2, 3, 4], "flatNumbers should flatten one level");
  assert.deepEqual(splitWords, ['hello', 'world', 'js'], "splitWords should contain the flattened words");
});

test("#output shows both flattened results", () => {
  const out = document.getElementById("output");
  assert.exists(out);
  assert.equal(out.textContent.trim(), '[1,2,3,4] | ["hello","world","js"]', "#output should show the flat and flatMap results");
});
