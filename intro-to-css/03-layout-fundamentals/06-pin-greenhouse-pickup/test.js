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

test("Card provides a relative positioning reference", () => {
  expectStyle('.map-card', 'position', 'relative');
});

test("Pin uses absolute positioning", () => {
  expectStyle('.pickup-pin', 'position', 'absolute');
});

test("Pin has its top offset", () => {
  expectStyle('.pickup-pin', 'top', '12px');
});

test("Pin has its right offset", () => {
  expectStyle('.pickup-pin', 'right', '12px');
});
