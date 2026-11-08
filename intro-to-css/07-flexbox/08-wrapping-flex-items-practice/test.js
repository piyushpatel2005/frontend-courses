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
test('Make the supply row a flex container.', () => {
  expectProperty('.supply-row', 'display', 'flex');
});
test('Allow supply labels to wrap.', () => {
  expectProperty('.supply-row', 'flex-wrap', 'wrap');
});
test('Give every card a flexible 9rem base size.', () => {
  for (const card of document.querySelectorAll('.supply-row > .card')) {
    const style = getComputedStyle(card);
    assert.equal(style.flexGrow, '1', 'Let every card grow with flex-grow: 1.');
    assert.equal(style.flexShrink, '1', 'Let every card shrink with flex-shrink: 1.');
    assert.equal(declarations(card, 'flex-basis').includes('9rem'), true, 'Use a 9rem basis, not a fixed width.');
    assert.equal(near(parseFloat(style.flexBasis), 9 * parseFloat(getComputedStyle(document.documentElement).fontSize)), true, 'Make the 9rem basis apply to every card.');
  }
});
