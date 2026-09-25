test('Start with one grid column for `.forecast` on narrow screens.', () => {
  const css = Array.from(document.styleSheets).flatMap((sheet) => Array.from(sheet.cssRules || [])).map((rule) => rule.cssText).join(' ');
  assert.match(css, /\.forecast\s*\{[^}]*grid-template-columns:\s*1fr/i, 'Start with one forecast column before the media query.');
});

test('Add a `min-width: 42rem` media query that uses two forecast columns.', () => {
  const css = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules || [])).map(rule => rule.cssText).join(' ');
  assert.match(css, /@media\s*\(min-width:\s*42rem\)[\s\S]*grid-template-columns:\s*repeat\(2,\s*1fr\)/i, 'Add the wide-screen two-column media query.');
});
