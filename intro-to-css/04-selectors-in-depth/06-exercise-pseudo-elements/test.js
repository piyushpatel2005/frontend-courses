test('The first card gets an opening quote', () => {
  const rules = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules || []));
  const quote = rules.find(rule => rule.selectorText === '.card:first-child::before');
  assert.exists(quote, 'Add a .card:first-child::before rule for only the first card.');
  assert.equal(quote.style.getPropertyValue('content').replaceAll('"', ''), '“', 'Set content to the opening quotation mark.');
});

test('The decorative quote is gold', () => {
  const rules = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules || []));
  const quote = rules.find(rule => rule.selectorText === '.card:first-child::before');
  assert.equal(['#fbbf24', 'rgb(251, 191, 36)'].includes(quote?.style.getPropertyValue('color')), true, 'Give the first card’s quote color #fbbf24.');
});
