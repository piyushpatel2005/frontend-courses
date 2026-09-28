test('Make the supply row a flex container.', () => {
  const value = getComputedStyle(document.querySelector('.supply-row')).getPropertyValue('display').trim();
  assert.equal(value, 'flex', 'Update .supply-row so display is flex.');
});
test('Allow supply labels to wrap.', () => {
  const value = getComputedStyle(document.querySelector('.supply-row')).getPropertyValue('flex-wrap').trim();
  assert.equal(value, 'wrap', 'Update .supply-row so flex-wrap is wrap.');
});
test('Give each card a flexible 9rem base size.', () => {
  const style = getComputedStyle(document.querySelector('.card'));
  assert.equal(style.flexGrow, '1', 'Set .card flex-grow to 1.');
  assert.equal(style.flexShrink, '1', 'Set .card flex-shrink to 1.');
  assert.equal(['9rem', '144px'].includes(style.flexBasis), true, 'Set .card flex-basis to 9rem.');
});
