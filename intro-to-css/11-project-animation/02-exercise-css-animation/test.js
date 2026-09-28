test('Name the drift animation on the banner.', () => {
  const rule = Array.from(document.styleSheets).flatMap((sheet) => Array.from(sheet.cssRules || []))
    .find((item) => item.selectorText === '.kite');
  assert.exists(rule, 'Find the .kite rule.');
  assert.equal(rule.style.getPropertyValue('animation-name').trim(), 'drift', 'Set animation-name: drift on .kite.');
});

test('Add a transform transition to the button.', () => {
  const css = Array.from(document.styleSheets).flatMap((sheet) => Array.from(sheet.cssRules || [])).map((rule) => rule.cssText).join(' ');
  assert.match(css, /button\s*\{[^}]*transition:\s*transform\s+160ms/i, 'Add a 160ms transform transition to the button.');
});
