test('Make the first card span both columns.', () => {
  const rule = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules || []))
    .find(item => item.selectorText === '.card:first-child');
  assert.exists(rule, 'Add a .card:first-child rule.');
  const style = rule.style;
  const shorthand = style.getPropertyValue('grid-column').trim();
  const start = style.getPropertyValue('grid-column-start').trim();
  const end = style.getPropertyValue('grid-column-end').trim();
  assert.equal(shorthand === '1 / -1' || (start === '1' && end === '-1'), true, 'Span the first card from grid line 1 to -1.');
});
