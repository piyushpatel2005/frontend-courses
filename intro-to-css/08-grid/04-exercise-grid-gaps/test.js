test('Make the event cards a grid.', () => {
  const value = getComputedStyle(document.querySelector('.event-grid')).getPropertyValue('display').trim();
  assert.equal(value, 'grid', 'Update .event-grid so display is grid.');
});
test('Add a one-rem gap.', () => {
  const value = getComputedStyle(document.querySelector('.event-grid')).getPropertyValue('gap').trim();
  assert.equal(value, '16px', 'Update .event-grid so gap is 16px.');
});
