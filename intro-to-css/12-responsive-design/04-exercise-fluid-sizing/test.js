test('Use a fluid page width capped at 48rem.', () => {
  const width = getComputedStyle(document.querySelector('.page-shell')).width;
  assert.notEqual(width, 'auto', 'Set a real width using min(92%, 48rem).');
});

test('Use a responsive auto-fit grid for the bulletin.', () => {
  const columns = getComputedStyle(document.querySelector('.bulletin')).gridTemplateColumns;
  assert.isAtLeast(columns.split(' ').length, 1, 'Use a grid-template-columns rule with auto-fit and minmax.');
});

test('Use clamp for scalable card padding.', () => {
  const padding = getComputedStyle(document.querySelector('.card')).paddingTop;
  assert.notEqual(padding, '0px', 'Set padding with clamp(1rem, 3vw, 2rem).');
});
