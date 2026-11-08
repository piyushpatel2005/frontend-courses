// CSSOM checks confirm the selector technique; computed styles check its result.
function rulesFor(selector) {
  const normalize = value => value.replace(/\s*>\s*/g, '>').replace(/['"]/g, '').trim();
  return Array.from(document.querySelectorAll('style[data-intercourses="user-css"], head style:not([data-intercourses])'), node => node.sheet).filter(Boolean).flatMap(sheet => {
    try { return Array.from(sheet.cssRules); } catch { return []; }
  }).filter(rule => rule.selectorText?.split(',').some(part => normalize(part) === normalize(selector)));
}
function uses(selector, property) {
  return rulesFor(selector).some(rule => rule.style.getPropertyValue(property));
}
test('Descendant selector colors the nested summary', () => {
  assert.equal(uses('.book-card p', 'color'), true, 'Use the descendant selector .book-card p.');
  assert.equal(getComputedStyle(document.querySelector('.book-card p')).color, 'rgb(191, 208, 229)', 'Set the summary color to #bfd0e5.');
});
test('Child selector sizes the direct heading', () => {
  assert.equal(uses('.book-card > h2', 'font-size'), true, 'Use the child selector .book-card > h2.');
  assert.equal(getComputedStyle(document.querySelector('.book-card > h2')).fontSize, '26px', 'Set the direct heading font-size to 26px.');
});
test('Attribute selector underlines the sample link', () => {
  assert.equal(uses('a[target="_blank"]', 'text-decoration') || uses('a[target="_blank"]', 'text-decoration-line'), true, 'Use the target attribute selector for the underline.');
  assert.equal(getComputedStyle(document.querySelector('a[target="_blank"]')).textDecorationLine.includes('underline'), true, 'Underline the sample link.');
});
