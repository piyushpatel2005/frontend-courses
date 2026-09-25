test('Rotate the pinned note slightly.', () => {
  const transform = getComputedStyle(document.querySelector('.tilted')).transform;
  assert.notEqual(transform, 'none', 'Set a rotate transform on .tilted.');
});

test('Keep the rotation origin at the card center.', () => {
  assert.equal(getComputedStyle(document.querySelector('.tilted')).transformOrigin, '82px 26px', 'Set transform-origin to center.');
});
