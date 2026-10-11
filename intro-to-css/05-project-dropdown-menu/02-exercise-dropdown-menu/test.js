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
test('Stall links have an initial hiding rule', () => {
  assert.equal(rulesFor('.submenu').some(rule => rule.style.display === 'none'), true, 'Set .submenu to display: none.');
  const menu = document.querySelector('.menu-item');
  // Submit can be pressed while the preview is hovered or focused.
  if (!menu.matches(':hover, :focus-within')) {
    assert.equal(getComputedStyle(document.querySelector('.submenu')).display, 'none', 'Hide the menu when neither open state is active.');
  }
});
test('Pointer hover has a block reveal rule', () => {
  assert.equal(rulesFor('.menu-item:hover .submenu').some(rule => rule.style.display === 'block'), true, 'Reveal .submenu when its parent menu is hovered.');
});
test('Keyboard focus keeps both stall links reachable', () => {
  assert.equal(rulesFor('.menu-item:focus-within .submenu').some(rule => rule.style.display === 'block'), true, 'Use :focus-within to keep the menu open.');
  const previous = document.activeElement;
  const controls = document.querySelectorAll('.menu-trigger, .submenu a');
  try {
    for (const control of controls) {
      control.focus();
      assert.equal(document.activeElement, control, 'Each menu control must receive focus.');
      assert.equal(getComputedStyle(document.querySelector('.submenu')).display, 'block', 'Keep the submenu visible while focus moves through it.');
    }
  } finally { document.activeElement?.blur(); if (previous !== document.body) previous?.focus(); }
});
