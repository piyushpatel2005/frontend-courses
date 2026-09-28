test('Start with one forecast column on narrow screens.', () => {
  const base = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules))
    .find(rule => rule.type === CSSRule.STYLE_RULE && rule.selectorText === '.forecast');
  assert.equal(base?.style.getPropertyValue('grid-template-columns').trim(), '1fr', 'Set the base .forecast grid to one 1fr column.');
});

test('Use two forecast columns at the 42rem breakpoint.', () => {
  const media = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules))
    .find(rule => rule.type === CSSRule.MEDIA_RULE && /\(min-width:\s*42rem\)/i.test(rule.conditionText));
  const forecast = Array.from(media?.cssRules || []).find(rule => rule.selectorText === '.forecast');
  assert.match(forecast?.style.getPropertyValue('grid-template-columns').trim() || '', /^repeat\(2,\s*1fr\)$/i, 'Set two equal .forecast columns inside the 42rem media query.');
});
