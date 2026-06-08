test("countdown is defined", () => {
  assert.equal(typeof countdown, "function", "Define a function named countdown");
});

test("countdown returns correct array", () => {
  assert.deepEqual(countdown(5), [5, 4, 3, 2, 1], "countdown(5) should return [5,4,3,2,1]");
  assert.deepEqual(countdown(3), [3, 2, 1], "countdown(3) should return [3,2,1]");
  assert.deepEqual(countdown(1), [1], "countdown(1) should return [1]");
});

test("collatz is defined", () => {
  assert.equal(typeof collatz, "function", "Define a function named collatz");
});

test("collatz returns correct step count", () => {
  assert.equal(collatz(1), 0, "collatz(1) should return 0 steps");
  assert.equal(collatz(6), 8, "collatz(6) should return 8 steps");
});

test("#output shows countdown result", () => {
  var out = document.getElementById("output");
  assert.exists(out, "Keep the <p id=\"output\"> element");
  assert.equal(out.textContent.trim(), "Countdown from 5: 5,4,3,2,1",
    '#output should show "Countdown from 5: 5,4,3,2,1"');
});
