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

function supplyRules(conditional) {
 const r=sourceRules();return conditional?r.filter(x=>x instanceof CSSSupportsRule&&x.conditionText.replace(/\s/g,'')==='(display:grid)').flatMap(x=>Array.from(x.cssRules)):r.filter(x=>x.type===CSSRule.STYLE_RULE);
}
function supplyValue(prop, conditional) { const rules=supplyRules(conditional).filter(x=>x.selectorText==='.supplies'&&x.style.getPropertyValue(prop));return rules.at(-1)?.style.getPropertyValue(prop); }
test('Base layout stays explicitly block',()=>{assert.equal(supplyValue('display',false),'block');});
test('Grid is added inside the feature query',()=>{assert.equal(supplyValue('display',true),'grid');expectStyle('.supplies','display','grid');});
test('Conditional grid defines equal shrinkable tracks',()=>{assert.equal(supplyValue('grid-template-columns',true),'repeat(2, minmax(0px, 1fr))');});
