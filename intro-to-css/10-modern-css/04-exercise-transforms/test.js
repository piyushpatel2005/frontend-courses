test('Rotate the pinned note.', () => {
  const rule = Array.from(document.styleSheets).flatMap((sheet) => Array.from(sheet.cssRules))
    .find((item) => item.selectorText === '.tilted');
  assert.exists(rule, 'Add a .tilted rule.');
  assert.equal(rule.style.transform, 'rotate(-3deg)', 'Rotate the note by -3deg.');
});

test('Pivot around the left edge.', () => {
  const rule = Array.from(document.styleSheets).flatMap((sheet) => Array.from(sheet.cssRules))
    .find((item) => item.selectorText === '.tilted');
  assert.exists(rule, 'Add a .tilted rule.');
  assert.equal(rule.style.getPropertyValue('transform-origin').trim(), 'left center', 'Set transform-origin to left center.');
});
