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
  for (const sheet of Array.from(document.querySelectorAll('style[data-intercourses="user-css"], head style:not([data-intercourses])'), node => node.sheet).filter(Boolean)) {
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
test('Make the workshop board a grid.', () => {
  expectProperty('.workshop-grid', 'display', 'grid');
});
test('Create three equal fractional columns.', () => {
  const grid = document.querySelector('.workshop-grid');
  assert.equal(declarations(grid, 'grid-template-columns').some(value => /^repeat\(\s*3\s*,\s*1fr\s*\)$/i.test(value)), true, 'Use repeat(3, 1fr) for the three tracks.');
  // Resize only the available space, never the learner's track declaration.
  // Fixed pixel tracks must not pass just because they fit one preview width.
  const originalStyle = grid.getAttribute('style');
  try {
    for (const width of [320, 640]) {
      grid.style.setProperty('width', width + 'px', 'important');
      const cards = rects('.workshop-grid'), box = grid.getBoundingClientRect();
      assert.equal(cards.every(r => near(r.top, cards[0].top) && near(r.width, cards[0].width)), true, 'Give all three cards equal columns in one row.');
      assert.equal(cards[1].left > cards[0].left && cards[2].left > cards[1].left, true, 'Place the cards in separate columns.');
      assert.equal(near(cards[0].left, box.left) && near(cards[2].right, box.right), true, 'Let the fractional tracks share the available width rather than using fixed pixel widths.');
    }
  } finally {
    grid.getAttribute('style');
    if (originalStyle === null) grid.removeAttribute('style');
    else grid.setAttribute('style', originalStyle);
  }
});
