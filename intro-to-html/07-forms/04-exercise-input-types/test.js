test("form has a text input", () => {
  assert.count('input[type="text"]', 1, "Add an <input type=\"text\">");
});

test("form has an email input", () => {
  assert.count('input[type="email"]', 1, "Add an <input type=\"email\">");
});

test("form has a number input with min and max", () => {
  var num = document.querySelector('input[type="number"][min][max]');
  assert.exists(num, "Add an <input type=\"number\"> with min and max attributes");
});

test("form has a date input", () => {
  assert.count('input[type="date"]', 1, "Add an <input type=\"date\">");
});

test("form has a color input", () => {
  assert.count('input[type="color"]', 1, "Add an <input type=\"color\">");
});

test("form has a submit button", () => {
  var btn = document.querySelector('button[type="submit"], input[type="submit"]');
  assert.exists(btn, "Add a submit button");
});
