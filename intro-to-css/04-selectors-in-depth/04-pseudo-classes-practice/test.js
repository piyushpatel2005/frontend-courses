// CSSOM checks confirm the selector technique; computed styles check its result.
function rulesFor(selector) {
  const normalize = value => value.replace(/\s*>\s*/g, '>').replace(/['"]/g, '').trim();
  return Array.from(document.querySelectorAll('style[data-intercourses="user-css"]'), node => node.sheet).filter(Boolean).flatMap(sheet => {
    try { return Array.from(sheet.cssRules); } catch { return []; }
  }).filter(rule => rule.selectorText?.split(',').some(part => normalize(part) === normalize(selector)));
}
function uses(selector, property) {
  return rulesFor(selector).some(rule => rule.style.getPropertyValue(property));
}
// Submit has no pointer API. Project the taught terminal :hover selectors through
// the native cascade, preserving their specificity with :not(:root). This is a
// cascade projection, not a synthetic event or a claim that native :hover fired.
// Only authored selectors change temporarily; no answer declarations are added.
function withHoverCascade(element, check) {
  const changed = [];
  function visit(rules) {
    for (const rule of rules) {
      if (rule.selectorText?.includes(':hover')) {
        const selectors = rule.selectorText.split(',');
        const projected = selectors.map(selector => {
          if (!selector.includes(':hover')) return selector;
          assert.equal(/^[\w.#\s>+~\-]+:hover$/.test(selector.trim()), true, 'Use the taught selector ending in :hover.');
          const base = selector.trim().slice(0, -6);
          // Project only a selector whose hovered element is this button.
          return element.matches(base) ? selector.replace(/:hover$/, ':not(:root)') : selector;
        });
        changed.push([rule, rule.selectorText]);
        rule.selectorText = projected.join(',');
      } else if (rule.cssRules) visit(rule.cssRules);
    }
  }
  try {
    for (const node of document.querySelectorAll('style[data-intercourses="user-css"], style:not([data-intercourses])')) {
      if (node.sheet) visit(node.sheet.cssRules);
    }
    check();
  } finally {
    for (const [rule, selector] of changed.reverse()) rule.selectorText = selector;
  }
}
test('Hover rule darkens the reserve button', () => {
  assert.equal(uses('.reserve-button:hover', 'background-color') || uses('.reserve-button:hover', 'background'), true, 'Style .reserve-button:hover in style.css.');
  const button = document.querySelector('.reserve-button');
  withHoverCascade(button, () => {
    assert.equal(getComputedStyle(button).backgroundColor, 'rgb(217, 119, 6)', 'The winning hover background must be #d97706.');
  });
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
