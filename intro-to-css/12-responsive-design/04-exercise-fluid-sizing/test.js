test('Cap the page width with min().', () => {
  const shell = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules))
    .find(rule => rule.selectorText === '.page-shell');
  assert.match(shell?.style.getPropertyValue('width').trim() || '', /^min\(92%,\s*48rem\)$/i, 'Use width: min(92%, 48rem) on .page-shell.');
});

test('Let bulletin columns fit available space.', () => {
  const bulletin = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules))
    .find(rule => rule.selectorText === '.bulletin');
  assert.match(bulletin?.style.getPropertyValue('grid-template-columns').trim() || '', /^repeat\(auto-fit,\s*minmax\(14rem,\s*1fr\)\)$/i, 'Set .bulletin columns to repeat(auto-fit, minmax(14rem, 1fr)).');
});

test('Bound card padding with clamp().', () => {
  const card = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules))
    .find(rule => rule.selectorText === '.card');
  assert.match(card?.style.getPropertyValue('padding').trim() || '', /^clamp\(1rem,\s*3vw,\s*2rem\)$/i, 'Set .card padding to clamp(1rem, 3vw, 2rem).');
});
