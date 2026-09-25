test('Arrange the form fields with `display: grid` on `form`.', () => {
  const value = getComputedStyle(document.querySelector('form')).getPropertyValue('display').trim();
  assert.equal(value, 'grid', 'Set display to grid.');
});

test('Give the focused input a visible `3px solid` outline.', () => {
  const css = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules || [])).map(rule => rule.cssText).join(' ');
  assert.match(css, /input:focus[\s\S]*outline:\s*[^;]*\s3px/i, 'Give focused inputs a 3px outline.');
});
