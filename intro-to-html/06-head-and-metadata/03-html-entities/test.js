test("escaped comparisons", () => {
  const html = document.body.innerHTML;
  assert.equal(/5\s*&lt;\s*10\s*and\s*10\s*&gt;\s*5/i.test(html), true, "Write both comparisons with &lt; and &gt;");
});

test("copyright entity", () => {
  assert.equal(/©.*all rights reserved/i.test(document.body.textContent), true, "Show a copyright line ending in All rights reserved");
});

test("escaped ampersand", () => {
  assert.equal(document.body.innerHTML.includes("&amp;"), true, "Display a literal ampersand with &amp;");
});

test("non-breaking word space", () => {
  assert.equal(/\S&nbsp;\S/.test(document.body.innerHTML), true, "Connect two words or a number and unit with &nbsp;");
});
