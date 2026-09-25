test('Animate `.kite` with the `drift` keyframes.', () => {
  const value = getComputedStyle(document.querySelector('.kite')).animationName;
  assert.equal(value, 'drift', 'Set the kite animation to drift.');
});

test('Add a transform transition to the button.', () => {
  const css = Array.from(document.styleSheets).flatMap((sheet) => Array.from(sheet.cssRules || [])).map((rule) => rule.cssText).join(' ');
  assert.match(css, /button\s*\{[^}]*transition:\s*transform\s+160ms/i, 'Add a 160ms transform transition to the button.');
});
