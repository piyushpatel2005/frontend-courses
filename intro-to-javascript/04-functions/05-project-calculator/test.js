test("add works correctly", () => {
  assert.equal(typeof add, "function", "Define an add function");
  assert.equal(add(3, 4), 7, "add(3, 4) should return 7");
  assert.equal(add(-1, 1), 0, "add(-1, 1) should return 0");
});

test("subtract works correctly", () => {
  assert.equal(typeof subtract, "function", "Define a subtract function");
  assert.equal(subtract(10, 4), 6, "subtract(10, 4) should return 6");
});

test("multiply works correctly", () => {
  assert.equal(typeof multiply, "function", "Define a multiply function");
  assert.equal(multiply(3, 5), 15, "multiply(3, 5) should return 15");
});

test("divide works correctly", () => {
  assert.equal(typeof divide, "function", "Define a divide function");
  assert.equal(divide(10, 2), 5, "divide(10, 2) should return 5");
  assert.equal(divide(8, 0), null, "divide(8, 0) should return null");
});

test("calculate delegates correctly", () => {
  assert.equal(typeof calculate, "function", "Define a calculate function");
  assert.equal(calculate(10, "+", 5), 15, 'calculate(10, "+", 5) should return 15');
  assert.equal(calculate(10, "-", 3), 7, 'calculate(10, "-", 3) should return 7');
  assert.equal(calculate(6, "*", 7), 42, 'calculate(6, "*", 7) should return 42');
  assert.equal(calculate(9, "/", 3), 3, 'calculate(9, "/", 3) should return 3');
  assert.equal(calculate(8, "/", 0), null, "Division by zero should return null");
  assert.equal(calculate(1, "%", 1), null, "Unknown operator should return null");
});

test("#result shows 10 + 5 = 15", () => {
  var r = document.getElementById("result");
  assert.exists(r, "Keep the <p id=\"result\"> element");
  assert.equal(r.textContent.trim(), "10 + 5 = 15", '#result should show "10 + 5 = 15"');
});

test("#zero-result shows division by zero message", () => {
  var z = document.getElementById("zero-result");
  assert.exists(z, "Keep the <p id=\"zero-result\"> element");
  assert.equal(z.textContent.trim(), "8 / 0 = Error: Division by zero",
    '#zero-result should show "8 / 0 = Error: Division by zero"');
});
