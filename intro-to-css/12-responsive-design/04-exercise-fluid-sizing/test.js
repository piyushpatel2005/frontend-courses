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

test("Set .page-shell width to min(92%, 48rem) in its normal rule.", () => {
  assert.equal(normalizedValue("width", declaration(".page-shell", "width", null)), normalizedValue("width", "min(92%, 48rem)"), "Set .page-shell width to min(92%, 48rem) in its normal rule.");
});

test("Set .bulletin grid-template-columns to repeat(auto-fit, minmax(14rem, 1fr)) in its normal rule.", () => {
  assert.equal(normalizedValue("grid-template-columns", declaration(".bulletin", "grid-template-columns", null)), normalizedValue("grid-template-columns", "repeat(auto-fit, minmax(14rem, 1fr))"), "Set .bulletin grid-template-columns to repeat(auto-fit, minmax(14rem, 1fr)) in its normal rule.");
});

test("Set .card padding to clamp(1rem, 3vw, 2rem) in its normal rule.", () => {
  assert.equal(normalizedValue("padding", declaration(".card", "padding", null)), normalizedValue("padding", "clamp(1rem, 3vw, 2rem)"), "Set .card padding to clamp(1rem, 3vw, 2rem) in its normal rule.");
});
