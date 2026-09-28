test('Allow the table wrapper to scroll horizontally.', () => {
  const wrap = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules))
    .find(rule => rule.selectorText === '.table-wrap');
  assert.equal(wrap?.style.getPropertyValue('overflow-x').trim(), 'auto', 'Set .table-wrap overflow-x to auto.');
});

test('Keep checkout columns at least 32rem wide.', () => {
  const table = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules))
    .find(rule => rule.selectorText === 'table');
  assert.equal(table?.style.getPropertyValue('min-width').trim(), '32rem', 'Set table min-width to 32rem.');
});
