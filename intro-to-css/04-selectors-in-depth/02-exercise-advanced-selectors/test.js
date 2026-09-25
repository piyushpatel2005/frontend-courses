test("descendant selector styles the nested summary", () => {
  assert.equal(getComputedStyle(document.querySelector(".book-card p")).color, "rgb(191, 208, 229)", "Use .book-card p to set the summary color to #bfd0e5.");
});

test("child selector styles only the direct title", () => {
  assert.equal(getComputedStyle(document.querySelector(".book-card > h2")).fontSize, "26px", "Use .book-card > h2 to set font-size: 26px.");
});

test("attribute selector underlines the external link", () => {
  assert.equal(getComputedStyle(document.querySelector('a[target="_blank"]')).textDecorationLine, "underline", 'Use a[target="_blank"] to underline the link.');
});
