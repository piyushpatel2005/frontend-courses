test('Give each card a visible solid border.', () => {
  const style = getComputedStyle(document.querySelector('.card'));
  assert.equal(style.borderStyle, 'solid', 'Set a solid border on .card.');
  assert.equal(style.borderTopWidth, '2px', 'Use a 2px card border.');
});

test('Round the card corners with a one-rem radius.', () => {
  assert.equal(getComputedStyle(document.querySelector('.card')).borderTopLeftRadius, '16px', 'Set border-radius to 1rem.');
});

test('Add a visible box shadow to the cards.', () => {
  assert.notEqual(getComputedStyle(document.querySelector('.card')).boxShadow, 'none', 'Set a box-shadow on .card.');
});
