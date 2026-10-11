// Inspect parsed learner CSS, not its spacing or one exact selector spelling.
function declarations(element, property) {
  const values = [];
  function visit(rules) {
    for (const rule of rules) {
      if (rule instanceof CSSMediaRule) {
        if (matchMedia(rule.conditionText).matches) visit(rule.cssRules);
      } else if (rule.selectorText && rule.style && element.matches(rule.selectorText)) {
        const value = rule.style.getPropertyValue(property).trim();
        if (value) values.push(value);
      } else if (rule.cssRules) visit(rule.cssRules);
    }
  }
  for (const sheet of document.styleSheets) {
    try { visit(sheet.cssRules); } catch (_) { /* External sheets are not learner CSS. */ }
  }
  return values;
}
function expectProperty(selector, property, value) {
  const element = document.querySelector(selector);
  assert.exists(element, 'Keep the supplied ' + selector + ' element.');
  assert.equal(declarations(element, property).includes(value), true, 'Set ' + property + ': ' + value + ' on ' + selector + '.');
  assert.equal(getComputedStyle(element).getPropertyValue(property).trim(), value, 'Make sure ' + property + ': ' + value + ' applies to ' + selector + '.');
}
function near(a, b) { return Math.abs(a - b) < 1.5; }
function rects(selector) { return Array.from(document.querySelector(selector).children, element => element.getBoundingClientRect()); }
test('Add a one-rem gap in both directions.', () => {
  const grid = document.querySelector('.event-grid'), style = getComputedStyle(grid);
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
  assert.equal(declarations(grid, 'row-gap').includes('1rem') && declarations(grid, 'column-gap').includes('1rem'), true, 'Use gap: 1rem for both rows and columns.');
  assert.equal(near(parseFloat(style.rowGap), rem) && near(parseFloat(style.columnGap), rem), true, 'Apply the gap in both directions.');
  const cards = rects('.event-grid');
  assert.equal(near(cards[1].left - cards[0].right, rem) && near(cards[2].top - cards[0].bottom, rem), true, 'Separate the card columns and rows by 1rem.');
});
