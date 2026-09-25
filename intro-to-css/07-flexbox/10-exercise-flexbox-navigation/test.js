test('Make the navigation a flex container.', () => {
  const value = getComputedStyle(document.querySelector('.nav-row')).getPropertyValue('display').trim();
  assert.equal(value, 'flex', 'Update .nav-row so display is flex.');
});
test('Separate the navigation groups.', () => {
  const value = getComputedStyle(document.querySelector('.nav-row')).getPropertyValue('justify-content').trim();
  assert.equal(value, 'space-between', 'Update .nav-row so justify-content is space-between.');
});
test('Center the navigation items.', () => {
  const value = getComputedStyle(document.querySelector('.nav-row')).getPropertyValue('align-items').trim();
  assert.equal(value, 'center', 'Update .nav-row so align-items is center.');
});
