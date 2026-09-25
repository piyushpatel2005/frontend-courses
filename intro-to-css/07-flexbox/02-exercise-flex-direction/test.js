test('Make the kit row a flex container.', () => {
  const value = getComputedStyle(document.querySelector('.kit-row')).getPropertyValue('display').trim();
  assert.equal(value, 'flex', 'Update .kit-row so display is flex.');
});
test('Lay out the kit cards in a row.', () => {
  const value = getComputedStyle(document.querySelector('.kit-row')).getPropertyValue('flex-direction').trim();
  assert.equal(value, 'row', 'Update .kit-row so flex-direction is row.');
});
