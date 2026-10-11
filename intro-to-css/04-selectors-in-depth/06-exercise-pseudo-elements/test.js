// CSSOM checks confirm the selector technique; computed styles check its result.
function rulesFor(selector) {
  const normalize = value => value.replace(/\s*>\s*/g, '>').replace(/['"]/g, '').trim();
  return Array.from(document.styleSheets).flatMap(sheet => {
    try { return Array.from(sheet.cssRules); } catch { return []; }
  }).filter(rule => rule.selectorText?.split(',').some(part => normalize(part) === normalize(selector)));
}
function uses(selector, property) {
  return rulesFor(selector).some(rule => rule.style.getPropertyValue(property));
}
test('Only the first card gets an opening quote', () => {
  assert.equal(uses('.card:first-child::before', 'content'), true, 'Add content on .card:first-child::before.');
  const cards = document.querySelectorAll('.card');
  assert.equal(getComputedStyle(cards[0], '::before').content, '"“"', 'Use the opening quotation mark as content.');
  assert.equal(['none', 'normal'].includes(getComputedStyle(cards[1], '::before').content), true, 'Leave the second card without a generated mark.');
});
test('The first card decoration is gold', () => {
  assert.equal(uses('.card:first-child::before', 'color'), true, 'Set the pseudo-element color, not the whole card color.');
  assert.equal(getComputedStyle(document.querySelector('.card'), '::before').color, 'rgb(251, 191, 36)', 'Set the quote color to #fbbf24.');
});
