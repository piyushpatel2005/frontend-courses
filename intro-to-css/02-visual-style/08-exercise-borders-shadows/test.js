test('Give each card a visible solid border.', () => {
  const style = getComputedStyle(document.querySelector('.card'));
  assert.equal(style.borderStyle, 'solid', 'Set a solid border on .card.');
  assert.equal(style.borderTopWidth, '2px', 'Use a 2px card border.');
  assert.equal(style.borderTopColor, 'rgb(245, 158, 11)', 'Use #f59e0b for the card border.');
});

test('Round the card corners with a one-rem radius.', () => {
  const rule = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules || [])).find(rule => rule.selectorText === '.card' && rule.style.getPropertyValue('border-radius'));
  assert.equal(rule?.style.getPropertyValue('border-radius'), '1rem', 'Set border-radius to 1rem on .card.');
});

test('Add a visible box shadow to the cards.', () => {
  const shadow = getComputedStyle(document.querySelector('.card')).boxShadow;
  assert.notEqual(shadow, 'none', 'Set a box-shadow on .card.');
  assert.match(shadow, /(?:8px|0\.5rem).*?(?:16px|1rem)/, 'Use a downward 0.5rem offset and 1rem blur.');
});
