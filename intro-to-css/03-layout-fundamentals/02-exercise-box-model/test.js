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

test("Packet has padding on all four sides", () => {
  for (const side of ['top', 'right', 'bottom', 'left']) expectStyle('.packet', 'padding-' + side, '20px');
});

test("Packet has a complete green border", () => {
  for (const side of ['top', 'right', 'bottom', 'left']) { expectStyle('.packet', 'border-' + side + '-width', '4px'); expectStyle('.packet', 'border-' + side + '-style', 'solid'); expectStyle('.packet', 'border-' + side + '-color', '#3c6e47'); }
});

test("Packet has 24px vertical and zero horizontal margin", () => {
  for (const side of ['top', 'bottom']) expectStyle('.packet', 'margin-' + side, '24px'); for (const side of ['left', 'right']) expectStyle('.packet', 'margin-' + side, '0px');
});
