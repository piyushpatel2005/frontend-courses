test('Define `--accent` on `:root` and use it for the note border.', () => {
  const value = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
  assert.equal(value, '#e76f51', 'Define --accent as #e76f51 on :root.');
});

test('Add a `background-color` transition to the button.', () => {
  const css = Array.from(document.styleSheets).flatMap((sheet) => Array.from(sheet.cssRules || [])).map((rule) => rule.cssText).join(' ');
  assert.match(css, /button\s*\{[^}]*transition:\s*background-color\s+180ms/i, 'Add a 180ms background-color transition to the button.');
});
