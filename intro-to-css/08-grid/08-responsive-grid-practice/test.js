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

test('Narrow preview has a one-column conditional rule',()=>{
 const rules=sourceRules(),media=rules.filter(r=>r instanceof CSSMediaRule&&r.conditionText.replace(/\s/g,'')==='(max-width:36rem)');
 assert.equal(media.some(m=>Array.from(m.cssRules).some(r=>r.selectorText==='.responsive-grid'&&r.style.gridTemplateColumns==='1fr')),true,'Put the single column inside @media (max-width: 36rem).');
 if(matchMedia('(max-width: 36rem)').matches){const g=document.querySelector('.responsive-grid'),cards=Array.from(g.children);assert.equal(cards.every((c,i)=>!i||c.getBoundingClientRect().top>=cards[i-1].getBoundingClientRect().bottom),true,'Stack the cards in the narrow preview.');}
});
