test('Make the tool row a flex container.', () => {
  const value = getComputedStyle(document.querySelector('.tool-row')).getPropertyValue('display').trim();
  assert.equal(value, 'flex', 'Update .tool-row so display is flex.');
});
test('Spread the tools across the main axis.', () => {
  const value = getComputedStyle(document.querySelector('.tool-row')).getPropertyValue('justify-content').trim();
  assert.equal(value, 'space-between', 'Update .tool-row so justify-content is space-between.');
});
