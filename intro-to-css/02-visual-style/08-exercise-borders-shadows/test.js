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

test("Both cards have amber borders on every side", () => {
  for (const side of ['top', 'right', 'bottom', 'left']) { expectStyle('.card', 'border-' + side + '-width', '2px'); expectStyle('.card', 'border-' + side + '-style', 'solid'); expectStyle('.card', 'border-' + side + '-color', '#f59e0b'); }
});

test("Every card corner is rounded", () => {
  for (const corner of ['top-left', 'top-right', 'bottom-left', 'bottom-right']) expectStyle('.card', 'border-' + corner + '-radius', '1rem');
});

test("Both cards have the specified soft downward shadow", () => {
  expectStyle('.card', 'box-shadow', '0 0.5rem 1rem rgb(120 53 15 / 20%)');
});
