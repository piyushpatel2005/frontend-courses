test('Give `.maker-profile` a readable maximum width of `42rem`.', () => {
  const value = getComputedStyle(document.querySelector('.maker-profile')).getPropertyValue('max-width').trim();
  assert.equal(value, '672px', 'Set max-width to 672px.');
});

test('Use `clamp()` to make the `h1` size responsive.', () => {
  const css = Array.from(document.styleSheets).flatMap((sheet) => Array.from(sheet.cssRules || [])).map((rule) => rule.cssText).join(' ');
  assert.match(css, /h1\s*\{[^}]*font-size:\s*clamp\(2\.2rem,\s*8vw,\s*4\.5rem\)/i, 'Use clamp(2.2rem, 8vw, 4.5rem) for the heading.');
});
