// Read authored base rules independently of the current preview width or motion preference.
// Browser geometry and interaction are checked separately during course review.
function declaration(selector, property, media) {
  const rules = Array.from(document.querySelector('style[data-intercourses="user-css"]').sheet.cssRules);
  let value = '';
  function scan(items) {
    for (const rule of items) {
      if (rule.type === CSSRule.STYLE_RULE && rule.selectorText.split(',').map(s => s.trim()).includes(selector)) {
        const next = rule.style.getPropertyValue(property).trim();
        if (next) value = next;
      }
    }
  }
  if (media) {
    const normalized = text => text.replace(/\s+/g, '').toLowerCase();
    for (const rule of rules) {
      if (rule.type === CSSRule.MEDIA_RULE && normalized(rule.conditionText) === normalized(media)) scan(rule.cssRules);
    }
  } else scan(rules);
  return value;
}
function normalizedValue(property, value) {
  const style = document.createElement('span').style;
  style.setProperty(property, value);
  return style.getPropertyValue(property).trim();
}

test("Set .forecast grid-template-columns to 1fr in its normal rule.", () => {
  assert.equal(normalizedValue("grid-template-columns", declaration(".forecast", "grid-template-columns", null)), normalizedValue("grid-template-columns", "1fr"), "Set .forecast grid-template-columns to 1fr in its normal rule.");
});

test("Set .forecast grid-template-columns to repeat(2, 1fr) inside @media (min-width: 42rem).", () => {
  assert.equal(normalizedValue("grid-template-columns", declaration(".forecast", "grid-template-columns", "(min-width: 42rem)")), normalizedValue("grid-template-columns", "repeat(2, 1fr)"), "Set .forecast grid-template-columns to repeat(2, 1fr) inside @media (min-width: 42rem).");
});
