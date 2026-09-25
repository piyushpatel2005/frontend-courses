test('Make the supply row a flex container.', () => {
  const value = getComputedStyle(document.querySelector('.supply-row')).getPropertyValue('display').trim();
  assert.equal(value, 'flex', 'Update .supply-row so display is flex.');
});
test('Allow supply labels to wrap.', () => {
  const value = getComputedStyle(document.querySelector('.supply-row')).getPropertyValue('flex-wrap').trim();
  assert.equal(value, 'wrap', 'Update .supply-row so flex-wrap is wrap.');
});
test('Let each card grow from its base size.', () => {
  const value = getComputedStyle(document.querySelector('.card')).getPropertyValue('flex-grow').trim();
  assert.equal(value, '1', 'Update .card so flex-grow is 1.');
});
