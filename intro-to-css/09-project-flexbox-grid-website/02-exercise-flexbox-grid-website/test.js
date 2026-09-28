test('Use flexbox to separate the heading and button in `.schedule-head`.', () => {
  const value = getComputedStyle(document.querySelector('.schedule-head')).getPropertyValue('display').trim();
  assert.equal(value, 'flex', 'Set display to flex.');
});

test('Use a three-column grid for `.show-grid`.', () => {
  const rule = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules || []))
    .find(item => item.selectorText === '.show-grid');
  assert.exists(rule, 'Add a .show-grid rule.');
  assert.match(rule.style.getPropertyValue('grid-template-columns').trim(), /^repeat\(3,\s*1fr\)$/i, 'Use repeat(3, 1fr) for three equal columns.');
});
