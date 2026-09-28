test('Limit the profile width to 42rem.', () => {
  const profile = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules))
    .find(rule => rule.selectorText === '.maker-profile');
  assert.equal(profile?.style.getPropertyValue('max-width').trim(), '42rem', 'Set .maker-profile max-width to 42rem.');
});

test('Scale the heading within clamp() bounds.', () => {
  const heading = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules))
    .find(rule => rule.selectorText === 'h1');
  assert.match(heading?.style.getPropertyValue('font-size').trim() || '', /^clamp\(2\.2rem,\s*8vw,\s*4\.5rem\)$/i, 'Set h1 font-size to clamp(2.2rem, 8vw, 4.5rem).');
});
