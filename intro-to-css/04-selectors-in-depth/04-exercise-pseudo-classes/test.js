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
test('Hover rule darkens the reserve button', () => {
  const rules = rulesFor('.reserve-button:hover');
  assert.equal(rules.some(rule => rule.style.backgroundColor === 'rgb(217, 119, 6)'), true, 'Set .reserve-button:hover background-color to #d97706.');
});
test('Only the first reading-list item is bold', () => {
  assert.equal(uses('.reading-list li:first-child', 'font-weight'), true, 'Use :first-child to target the first item.');
  const items = document.querySelectorAll('.reading-list li');
  assert.equal(getComputedStyle(items[0]).fontWeight, '700', 'Make the first item bold.');
  assert.equal(Number(getComputedStyle(items[1]).fontWeight) < 700, true, 'Leave the second item at its normal weight.');
});
test('Focused email field has a cyan outline', () => {
  const email = document.querySelector('.email');
  const previous = document.activeElement;
  try {
    email.focus();
    assert.equal(document.activeElement, email, 'The email field must receive focus.');
    assert.equal(uses('.email:focus', 'outline') || uses('.email:focus', 'outline-color'), true, 'Style the email focus state.');
    const style = getComputedStyle(email);
    assert.equal(style.outlineWidth, '3px', 'Use a 3px focus outline.');
    assert.equal(style.outlineStyle, 'solid', 'Use a solid focus outline.');
    assert.equal(style.outlineColor, 'rgb(103, 232, 249)', 'Use #67e8f9 for the focus outline.');
  } finally { email.blur(); if (previous !== document.body) previous?.focus(); }
});
