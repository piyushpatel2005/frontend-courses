test('Make the workshop board a grid.', () => {
  const value = getComputedStyle(document.querySelector('.workshop-grid')).getPropertyValue('display').trim();
  assert.equal(value, 'grid', 'Update .workshop-grid so display is grid.');
});
test('Create three equal columns.', () => {
  assert.equal(getComputedStyle(document.querySelector('.workshop-grid')).gridTemplateColumns.split(' ').length, 3, 'Use three equal columns.');
});
