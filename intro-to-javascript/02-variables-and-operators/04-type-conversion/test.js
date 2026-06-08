test("priceStr is a string", () => {
  assert.equal(typeof priceStr, "string", 'Declare `const priceStr = "29"`');
  assert.equal(priceStr, "29", 'priceStr should be the string "29"');
});

test("price is converted to a number", () => {
  assert.equal(typeof price, "number", "Convert priceStr to a number with Number()");
  assert.equal(price, 29, "price should be the number 29");
});

test("total is calculated correctly", () => {
  assert.equal(typeof total, "number", "Declare `total = price * quantity`");
  assert.equal(total, 87, "total should be 87 (29 × 3)");
});

test("#output shows the formatted message", () => {
  var out = document.getElementById("output");
  assert.exists(out, "Keep the <p id=\"output\"> element");
  assert.equal(out.textContent.trim(), "Total: $87", '#output should show "Total: $87"');
});
