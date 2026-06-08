test("forEach and map build the expected arrays", () => {
  assert.deepEqual(labels, ['Number: 1', 'Number: 2', 'Number: 3'], "labels should be built with forEach");
  assert.deepEqual(doubledNumbers, [2, 4, 6], "doubledNumbers should be built with map");
});

test("#output shows both iteration results", () => {
  const out = document.getElementById("output");
  assert.exists(out);
  assert.equal(out.textContent.trim(), 'Number: 1, Number: 2, Number: 3 | [2,4,6]', "#output should show both iteration results");
});
