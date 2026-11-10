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
test('Make the navigation a flex container.', () => {
  expectProperty('.nav-row', 'display', 'flex');
});
test('Separate the navigation groups.', () => {
  expectProperty('.nav-row', 'justify-content', 'space-between');
  atLayoutWidths(document.querySelector('.nav-row'), () => {
    const row = document.querySelector('.nav-row'), box = row.getBoundingClientRect(), style = getComputedStyle(row), groups = rects('.nav-row');
    assert.equal(near(groups[0].left, box.left + parseFloat(style.paddingLeft)) && near(groups[1].right, box.right - parseFloat(style.paddingRight)), true, 'Place the title and link group at opposite inner edges.');
  });
});
test('Center the navigation items.', () => {
  expectProperty('.nav-row', 'align-items', 'center');
  const row = document.querySelector('.nav-row');
  assert.equal(getComputedStyle(row).display, 'flex', 'First make .nav-row a flex container; align-items must align flex items.');
  atLayoutWidths(row, () => {
    const groups = rects('.nav-row');
    assert.equal(Math.abs(groups[0].height - groups[1].height) > 2, true, 'Keep the supplied differently sized navigation groups.');
    assert.equal(near(groups[0].top + groups[0].height / 2, groups[1].top + groups[1].height / 2), true, 'Line up the title and link group by their vertical centers.');
    assert.equal(groups[1].left >= groups[0].right, true, 'Align the two groups on the same flex row.');
  });
});
