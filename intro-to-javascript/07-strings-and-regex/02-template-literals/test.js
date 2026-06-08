test("formatCurrency formats USD correctly", () => {
  assert.equal(typeof formatCurrency, "function", "Define formatCurrency");
  assert.equal(formatCurrency(1234.5), "$1,234.50", 'formatCurrency(1234.5) should return "$1,234.50"');
  assert.equal(formatCurrency(0), "$0.00", 'formatCurrency(0) should return "$0.00"');
});

test("truncate shortens long text", () => {
  assert.equal(typeof truncate, "function", "Define truncate");
  assert.equal(truncate("Hello World", 5), "Hello...", "truncate('Hello World', 5) should return 'Hello...'");
  assert.equal(truncate("Hi", 10), "Hi", "truncate should not add '...' if text fits");
});

test("toSlug converts title to slug", () => {
  assert.equal(typeof toSlug, "function", "Define toSlug");
  assert.equal(toSlug("Hello World"), "hello-world", "toSlug should lowercase and hyphenate");
  assert.equal(toSlug("Hello, World!"), "hello-world", "toSlug should remove special chars");
});

test("#output shows the formatted result", () => {
  var out = document.getElementById("output");
  assert.exists(out, "Keep the <p id=\"output\"> element");
  assert.equal(out.textContent.trim(), "$1,234.50 | Hello... | hello-world",
    '#output should show "$1,234.50 | Hello... | hello-world"');
});
