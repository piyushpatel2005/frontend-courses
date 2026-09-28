test("descendant selector styles the nested summary", () => {
  const rules = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules || []));
  assert.equal(rules.some(rule => rule.selectorText === '.book-card p' && ['#bfd0e5', 'rgb(191, 208, 229)'].includes(rule.style.getPropertyValue('color'))), true, 'Add a .book-card p rule for the nested summary.');
  assert.equal(getComputedStyle(document.querySelector(".book-card p")).color, "rgb(191, 208, 229)", "Use .book-card p to set the summary color to #bfd0e5.");
});

test("child selector styles only the direct title", () => {
  const rules = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules || []));
  assert.equal(rules.some(rule => rule.selectorText === '.book-card > h2' && rule.style.getPropertyValue('font-size') === '26px'), true, 'Target only direct child headings with .book-card > h2.');
  assert.equal(getComputedStyle(document.querySelector(".book-card > h2")).fontSize, "26px", "Use .book-card > h2 to set font-size: 26px.");
});

test("attribute selector underlines the external link", () => {
  const rules = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules || []));
  assert.equal(rules.some(rule => rule.selectorText === 'a[target="_blank"]' && rule.style.getPropertyValue('text-decoration') === 'underline'), true, 'Use a[target="_blank"] { text-decoration: underline; }.');
});
