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
test('Input margin separates it from the button', () => {
  const input = document.querySelector('input');
  const expected = parseFloat(getComputedStyle(document.documentElement).fontSize) * .75;
  assert.equal(parseFloat(getComputedStyle(input).marginBottom), expected, 'Set input margin-bottom to .75rem.');
});
test('Focused input shows a dark-orange outline', () => {
  const input = document.querySelector('input');
  const previous = document.activeElement;
  try {
    input.focus();
    assert.equal(document.activeElement, input, 'The input must receive focus.');
    assert.equal(uses('input:focus', 'outline') || uses('input:focus', 'outline-color'), true, 'Style input:focus.');
    const style = getComputedStyle(input);
    assert.equal(style.outlineWidth, '3px', 'Use a 3px outline.');
    assert.equal(style.outlineStyle, 'solid', 'Use a solid outline.');
    assert.equal(style.outlineColor, 'rgb(154, 52, 18)', 'Use dark orange #9a3412.');
  } finally { input.blur(); if (previous !== document.body) previous?.focus(); }
});
