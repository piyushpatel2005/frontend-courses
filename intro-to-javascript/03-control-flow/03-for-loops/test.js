test("sumArray is defined", () => {
  assert.equal(typeof sumArray, "function", "Define a function named sumArray");
});

test("sumArray returns correct sum", () => {
  assert.equal(sumArray([1, 2, 3, 4, 5]), 15, "sumArray([1,2,3,4,5]) should return 15");
  assert.equal(sumArray([10, -5, 5]), 10, "sumArray([10,-5,5]) should return 10");
  assert.equal(sumArray([]), 0, "sumArray([]) should return 0");
});

test("reverseArray is defined", () => {
  assert.equal(typeof reverseArray, "function", "Define a function named reverseArray");
});

test("reverseArray returns reversed array", () => {
  assert.deepEqual(reverseArray([1, 2, 3]), [3, 2, 1], "reverseArray([1,2,3]) should return [3,2,1]");
  assert.deepEqual(reverseArray(["a", "b", "c"]), ["c", "b", "a"], "reverseArray should work with strings");
});

test("#output shows Sum: 15", () => {
  var out = document.getElementById("output");
  assert.exists(out, "Keep the <p id=\"output\"> element");
  assert.equal(out.textContent.trim(), "Sum: 15", '#output should show "Sum: 15"');
});
