test('Give the notice card a readable fixed starting width.', () => {
  const rule = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules || [])).find(rule => rule.selectorText === '.card' && rule.style.width);
  assert.equal(rule?.style.width, '14rem', 'Set .card width to 14rem.');
});

test('Keep the card from overflowing a narrow container.', () => {
  assert.equal(getComputedStyle(document.querySelector('.card')).maxWidth, '100%', 'Set max-width to 100%.');
});

test('Make extra content scroll instead of escaping the card.', () => {
  assert.equal(getComputedStyle(document.querySelector('.card')).overflow, 'auto', 'Set overflow to auto.');
});
