test('Make the responsive board a grid.', () => {
  const value = getComputedStyle(document.querySelector('.responsive-grid')).getPropertyValue('display').trim();
  assert.equal(value, 'grid', 'Set display to grid.');
});

test('Use a 36rem media query that changes the board to one column.', () => {
  const mediaRule = Array.from(document.styleSheets)
    .flatMap((sheet) => Array.from(sheet.cssRules || []))
    .find((rule) => rule.conditionText === '(max-width: 36rem)');
  assert.exists(mediaRule, 'Add an @media (max-width: 36rem) rule.');
  const nested = Array.from(mediaRule.cssRules || []).find((rule) => rule.selectorText === '.responsive-grid');
  assert.exists(nested, 'Target .responsive-grid inside the media query.');
  assert.equal(nested.style.gridTemplateColumns, '1fr', 'Set the small-screen grid to one column.');
});
