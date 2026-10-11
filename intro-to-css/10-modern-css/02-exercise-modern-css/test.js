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
  return style.getPropertyValue(property).trim().replace(/([\d.]+)ms\b/g, (_, value) => `${Number(value) / 1000}s`);
}

test("Set :root --accent to #e76f51 in its normal rule.", () => {
  assert.equal(normalizedValue("--accent", declaration(":root", "--accent", null)), normalizedValue("--accent", "#e76f51"), "Set :root --accent to #e76f51 in its normal rule.");
});

test("Set button transition to background-color 180ms ease in its normal rule.", () => {
  assert.equal(normalizedValue("transition", declaration("button", "transition", null)), normalizedValue("transition", "background-color 180ms ease"), "Set button transition to background-color 180ms ease in its normal rule.");
});
