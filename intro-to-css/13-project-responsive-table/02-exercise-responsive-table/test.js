test('Allow `.table-wrap` to scroll horizontally when space is tight.', () => {
  const value = getComputedStyle(document.querySelector('.table-wrap')).getPropertyValue('overflow-x').trim();
  assert.equal(value, 'auto', 'Set overflow-x to auto.');
});

test('Give the table a `min-width` of `32rem` so columns stay legible.', () => {
  const value = getComputedStyle(document.querySelector('table')).getPropertyValue('min-width').trim();
  assert.equal(value, '512px', 'Set min-width to 512px.');
});
