test("power is defined", () => {
  assert.equal(typeof power, "function", "Define a function named power");
});

test("power returns correct values", () => {
  assert.equal(power(2, 10), 1024, "2^10 should be 1024");
  assert.equal(power(3, 3), 27, "3^3 should be 27");
  assert.equal(power(5, 0), 1, "5^0 should be 1");
  assert.equal(power(2, 1), 2, "2^1 should be 2");
});

test("flatten is defined", () => {
  assert.equal(typeof flatten, "function", "Define a function named flatten");
});

test("flatten deeply flattens nested arrays", () => {
  assert.deepEqual(flatten([1, [2, [3, [4, 5]]]]), [1, 2, 3, 4, 5],
    "Should deeply flatten to [1, 2, 3, 4, 5]");
  assert.deepEqual(flatten([1, 2, 3]), [1, 2, 3],
    "Flat array should remain unchanged");
  assert.deepEqual(flatten([]), [],
    "Empty array should return empty");
});

test("#output shows correct result", () => {
  var out = document.getElementById("output");
  assert.exists(out, "Keep the <p id=\"output\"> element");
  assert.equal(out.textContent.trim(), "2^10 = 1024 | flatten: 1,2,3,4,5",
    '#output should show "2^10 = 1024 | flatten: 1,2,3,4,5"');
});
