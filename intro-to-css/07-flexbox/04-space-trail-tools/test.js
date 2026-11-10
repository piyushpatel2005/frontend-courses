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
test('Make the tool row a flex container.', () => {
  expectProperty('.tool-row', 'display', 'flex');
});
test('Spread the tools across the main axis.', () => {
  expectProperty('.tool-row', 'justify-content', 'space-between');
  atLayoutWidths(document.querySelector('.tool-row'), () => {
    const row = document.querySelector('.tool-row');
    const outer = row.getBoundingClientRect(), style = getComputedStyle(row), cards = rects('.tool-row');
    assert.equal(cards.every(r => near(r.top, cards[0].top)), true, 'Keep the tools in a row.');
    assert.equal(near(cards[0].left, outer.left + parseFloat(style.borderLeftWidth) + parseFloat(style.paddingLeft)), true, 'The first tool should start at the inner edge.');
    assert.equal(near(cards[2].right, outer.right - parseFloat(style.borderRightWidth) - parseFloat(style.paddingRight)), true, 'The last tool should reach the opposite inner edge.');
    assert.equal(near(cards[1].left - cards[0].right, cards[2].left - cards[1].right), true, 'Share the remaining space equally between the tools.');
  });
});
