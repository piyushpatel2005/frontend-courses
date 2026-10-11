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

test("Body uses Georgia with a serif fallback", () => {
  const names = getComputedStyle(document.body).fontFamily.toLowerCase().replace(/["']/g, '').split(',').map(x => x.trim()); assert.equal(JSON.stringify(names), JSON.stringify(['georgia', 'serif']), 'Set font-family: Georgia, serif on body.');
});

test("Every note paragraph has 1.7 line height", () => {
  each('.note p', s => assert.equal(Math.abs(parseFloat(s.lineHeight) / parseFloat(s.fontSize) - 1.7) < 0.002, true, 'Give every .note p a line-height of 1.7.'));
});

test("Heading has the requested relative letter spacing", () => {
  expectStyle('h1', 'letter-spacing', '0.04em');
});
