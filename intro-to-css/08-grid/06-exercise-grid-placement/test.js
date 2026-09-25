test('Make the featured board a grid.', () => {
  const value = getComputedStyle(document.querySelector('.feature-grid')).getPropertyValue('display').trim();
  assert.equal(value, 'grid', 'Update .feature-grid so display is grid.');
});
test('Make the first card span both columns.', () => {
  const item = document.querySelector('.card');
  assert.equal(getComputedStyle(item).gridColumnStart, '1', 'Start the first card at line 1.');
  assert.equal(getComputedStyle(item).gridColumnEnd, '-1', 'End the first card at line -1.');
});
