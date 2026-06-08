test("firstNegative is defined", () => {
  assert.equal(typeof firstNegative, "function", "Define a function named firstNegative");
});

test("firstNegative returns the first negative number", () => {
  assert.equal(firstNegative([-5, 3, -2, 8]), -5, "Should return -5");
  assert.equal(firstNegative([3, 8, -2, -1]), -2, "Should return -2 (first negative)");
  assert.equal(firstNegative([1, 2, 3]), null, "Should return null when no negatives");
});

test("positiveOnly is defined", () => {
  assert.equal(typeof positiveOnly, "function", "Define a function named positiveOnly");
});

test("positiveOnly returns only positive numbers", () => {
  assert.deepEqual(positiveOnly([-5, 3, -2, 8, -1]), [3, 8], "Should return [3, 8]");
  assert.deepEqual(positiveOnly([0, -1, 5]), [5], "Zero is not positive");
  assert.deepEqual(positiveOnly([-1, -2]), [], "Empty array when no positives");
});

test("#output shows correct combined result", () => {
  var out = document.getElementById("output");
  assert.exists(out, "Keep the <p id=\"output\"> element");
  assert.equal(out.textContent.trim(), "First negative: -5 | Positives: 3,8",
    '#output should show "First negative: -5 | Positives: 3,8"');
});
