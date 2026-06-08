test("square is a function", () => {
  assert.equal(typeof square, "function", "Declare square as an arrow function");
});

test("square returns n * n", () => {
  assert.equal(square(5), 25, "square(5) should return 25");
  assert.equal(square(3), 9, "square(3) should return 9");
  assert.equal(square(0), 0, "square(0) should return 0");
});

test("celsius is a function", () => {
  assert.equal(typeof celsius, "function", "Declare celsius as an arrow function");
});

test("celsius converts Fahrenheit correctly", () => {
  assert.equal(celsius(32), 0, "celsius(32) should return 0");
  assert.equal(celsius(98), 36.7, "celsius(98) should return 36.7");
  assert.equal(celsius(212), 100, "celsius(212) should return 100");
});

test("isEven is a function", () => {
  assert.equal(typeof isEven, "function", "Declare isEven as an arrow function");
});

test("isEven returns correct boolean", () => {
  assert.equal(isEven(4), true, "isEven(4) should return true");
  assert.equal(isEven(7), false, "isEven(7) should return false");
  assert.equal(isEven(0), true, "isEven(0) should return true");
});

test("#output shows the combined result", () => {
  var out = document.getElementById("output");
  assert.exists(out, "Keep the <p id=\"output\"> element");
  assert.equal(out.textContent.trim(), "5² = 25 | 98°F = 36.7°C | 4 is even: true",
    '#output should show "5² = 25 | 98°F = 36.7°C | 4 is even: true"');
});
