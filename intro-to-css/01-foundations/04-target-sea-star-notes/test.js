// Use the real iframe's computed styles; only selector/source lessons inspect CSSOM.
function each(selector, check) {
  const elements = Array.from(document.querySelectorAll(selector));
  assert.equal(elements.length > 0, true, 'Keep the supplied ' + selector + ' elements.');
  elements.forEach(element => check(getComputedStyle(element), element));
}
function valueFor(property, value, target) {
  if (property === 'display') return value;
  const probe = document.createElement('span');
  probe.style.cssText = 'all: initial; position: absolute; visibility: hidden;';
  if (/^border-.*-width$/.test(property)) probe.style.borderStyle = 'solid';
  if (target) probe.style.fontSize = getComputedStyle(target).fontSize;
  probe.style.setProperty(property, value);
  document.body.append(probe);
  try { return getComputedStyle(probe).getPropertyValue(property); }
  finally { probe.remove(); }
}
function expectStyle(selector, property, value) {
  each(selector, (style, element) => assert.equal(style.getPropertyValue(property), valueFor(property, value, element), 'Set ' + selector + ' ' + property + ' to ' + value + '.'));
}
function sourceRules(source = 'external') {
  const nodes = source === 'external'
    ? document.querySelectorAll('style[data-intercourses="user-css"]')
    : document.querySelectorAll('head style:not([data-intercourses])');
  return Array.from(nodes).flatMap(node => Array.from(node.sheet?.cssRules || []));
}
function declaration(selector, property, source = 'external') {
  const rules = sourceRules(source).filter(rule => rule.selectorText?.split(',').map(s => s.trim()).includes(selector) && rule.style.getPropertyValue(property));
  assert.equal(rules.length > 0, true, 'Add a ' + selector + ' rule with ' + property + ' in ' + source + ' CSS.');
  return rules[rules.length - 1].style;
}
function expectDeclared(selector, property, value, source = 'external') {
  const style = declaration(selector, property, source);
  assert.equal(valueFor(property, style.getPropertyValue(property)), valueFor(property, value), 'Use ' + value + ' for ' + selector + ' ' + property + '.');
}

test("Element selector spaces both paragraphs", () => {
  assert.equal(declaration('p', 'line-height').lineHeight, '1.6', 'Use unitless line-height: 1.6 in the p rule.'); expectStyle('p', 'line-height', '1.6');
});

test("Care-tip class highlights only the care note", () => {
  expectDeclared('.care-tip', 'background-color', '#fff4cc'); expectStyle('.care-tip', 'background-color', '#fff4cc'); each('p:not(.care-tip)', s => assert.notEqual(s.backgroundColor, valueFor('background-color', '#fff4cc'), 'Keep the background off the ordinary paragraph.'));
});

test("ID selector colors the title", () => {
  expectDeclared('#sea-star-title', 'color', '#7a1fa2'); expectStyle('#sea-star-title', 'color', '#7a1fa2'); each('p', s => assert.notEqual(s.color, valueFor('color', '#7a1fa2'), 'Keep the purple color on the title only.'));
});
