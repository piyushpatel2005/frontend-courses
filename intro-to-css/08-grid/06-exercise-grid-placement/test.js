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
// Submit can run in a 1px iframe. Vary available space, not the answer.
function atLayoutWidths(element, check) {
  const originalStyle = element.getAttribute('style');
  try {
    for (const width of [320, 640]) {
      element.style.setProperty('width', width + 'px', 'important');
      check();
    }
  } finally {
    element.getAttribute('style');
    if (originalStyle === null) element.removeAttribute('style');
    else element.setAttribute('style', originalStyle);
  }
}
function near(a, b) { return Math.abs(a - b) < 1.5; }
function rects(selector) { return Array.from(document.querySelector(selector).children, element => element.getBoundingClientRect()); }
test('Make the first card span both columns.', () => {
  const grid = document.querySelector('.feature-grid'), first = grid.firstElementChild;
  const style = getComputedStyle(first);
  assert.equal(declarations(first, 'grid-column-start').includes('1') && declarations(first, 'grid-column-end').includes('-1'), true, 'Place the first card from column line 1 to -1.');
  assert.equal(style.gridColumnStart === '1' && style.gridColumnEnd === '-1', true, 'Make the line placement apply to the first card.');
  atLayoutWidths(document.querySelector('.feature-grid'), () => {
    const cards = rects('.feature-grid');
    assert.equal(near(cards[0].width, grid.getBoundingClientRect().width), true, 'The first card should cover the full grid width.');
    assert.equal(cards[1].top >= cards[0].bottom && near(cards[1].top, cards[2].top) && cards[2].left > cards[1].left, true, 'Leave the other two cards side by side in the next row.');
  });
});
