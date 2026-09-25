test('Make the briefing row a flex container.', () => {
  const value = getComputedStyle(document.querySelector('.briefing-row')).getPropertyValue('display').trim();
  assert.equal(value, 'flex', 'Update .briefing-row so display is flex.');
});
test('Center the cards on the cross axis.', () => {
  const value = getComputedStyle(document.querySelector('.briefing-row')).getPropertyValue('align-items').trim();
  assert.equal(value, 'center', 'Update .briefing-row so align-items is center.');
});
