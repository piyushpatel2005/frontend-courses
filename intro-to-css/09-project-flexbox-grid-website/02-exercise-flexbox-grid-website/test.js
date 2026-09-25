test('Use flexbox to separate the heading and button in `.schedule-head`.', () => {
  const value = getComputedStyle(document.querySelector('.schedule-head')).getPropertyValue('display').trim();
  assert.equal(value, 'flex', 'Set display to flex.');
});

test('Use a three-column grid for `.show-grid`.', () => {
  const value = getComputedStyle(document.querySelector('.show-grid')).gridTemplateColumns;
  assert.equal(value.split(' ').length, 3, 'Use three equal grid columns.');
});
