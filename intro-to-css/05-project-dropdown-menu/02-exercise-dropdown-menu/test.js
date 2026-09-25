test('Reveal the stall links by setting `.submenu` to `display: none`.', () => {
  const value = getComputedStyle(document.querySelector('.submenu')).getPropertyValue('display').trim();
  assert.equal(value, 'none', 'Set display to none.');
});

test('Show the submenu as a grid when `.menu-item` is hovered.', () => {
  const css = Array.from(document.styleSheets).flatMap((sheet) => Array.from(sheet.cssRules || [])).map((rule) => rule.cssText).join(' ');
  assert.match(css, /\.menu-item:hover\s+\.submenu\s*\{[^}]*display:\s*grid/i, 'Show .submenu as a grid in the hover rule.');
});
