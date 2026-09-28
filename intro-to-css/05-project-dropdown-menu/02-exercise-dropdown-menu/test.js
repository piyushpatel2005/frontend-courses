test('Stall links start hidden', () => {
  assert.equal(getComputedStyle(document.querySelector('.submenu')).display, 'none', 'Set display: none on .submenu.');
});

test('Pointer hover reveals the submenu as a block', () => {
  const rules = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules || []));
  assert.equal(rules.some(rule => rule.selectorText?.split(',').some(s => s.trim() === '.menu-item:hover .submenu') && rule.style.display === 'block'), true, 'Add .menu-item:hover .submenu { display: block; }.');
});

test('Keyboard focus inside the menu reveals the submenu', () => {
  const trigger = document.querySelector('.menu-trigger');
  trigger.focus();
  assert.equal(document.activeElement, trigger, 'The trigger must receive keyboard focus.');
  const rules = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules || []));
  assert.equal(rules.some(rule => rule.selectorText?.split(',').some(s => s.trim() === '.menu-item:focus-within .submenu') && rule.style.display === 'block'), true, 'Add .menu-item:focus-within .submenu { display: block; }.');
});
