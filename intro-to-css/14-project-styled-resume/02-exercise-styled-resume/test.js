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

test("Set .maker-profile max-width to 42rem in its normal rule.", () => {
  assert.equal(normalizedValue("max-width", declaration(".maker-profile", "max-width", null)), normalizedValue("max-width", "42rem"), "Set .maker-profile max-width to 42rem in its normal rule.");
});

test("Set h1 font-size to clamp(2.2rem, 8vw, 4.5rem) in its normal rule.", () => {
  assert.equal(normalizedValue("font-size", declaration("h1", "font-size", null)), normalizedValue("font-size", "clamp(2.2rem, 8vw, 4.5rem)"), "Set h1 font-size to clamp(2.2rem, 8vw, 4.5rem) in its normal rule.");
});
