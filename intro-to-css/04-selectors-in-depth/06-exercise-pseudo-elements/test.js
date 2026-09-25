test('Create a before pseudo-element for the featured card.', () => {
  const content = getComputedStyle(document.querySelector('.card'), '::before').content;
  assert.notEqual(content, 'none', 'Set a non-empty content value on .card:first-child::before.');
});

test('Use a quotation mark as the pseudo-element content.', () => {
  const content = getComputedStyle(document.querySelector('.card'), '::before').content;
  assert.includes(content, '“', 'Use the opening quotation mark as content.');
});
