test('Make the workshop board a grid.', () => {
  const value = getComputedStyle(document.querySelector('.workshop-grid')).getPropertyValue('display').trim();
  assert.equal(value, 'grid', 'Update .workshop-grid so display is grid.');
});
test('Create three equal columns.', () => {
  const rule = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules || []))
    .find(item => item.selectorText === '.workshop-grid');
  assert.exists(rule, 'Add a .workshop-grid rule.');
  assert.match(rule.style.getPropertyValue('grid-template-columns').trim(), /^repeat\(3,\s*1fr\)$/i, 'Use repeat(3, 1fr) for three equal columns.');
});
