test('Add a one-rem gap.', () => {
  const value = getComputedStyle(document.querySelector('.event-grid')).getPropertyValue('gap').trim();
  assert.equal(value === '1rem' || value === '16px', true, 'Set the .event-grid gap to 1rem.');
});
