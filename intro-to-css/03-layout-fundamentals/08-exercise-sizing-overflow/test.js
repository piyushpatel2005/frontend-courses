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

test("Both cards have a 14rem preferred width", () => {
  each('.card', (style, element) => {
    const row = element.parentElement;
    const root = document.documentElement;
    const originalRow = row.style.cssText;
    const originalRoot = root.style.cssText;
    try {
      row.style.maxWidth = 'none';
      row.style.flexWrap = 'wrap';
      for (const rootSize of [16, 20]) {
        root.style.fontSize = rootSize + 'px';
        for (const rowWidth of [600, 800]) {
          row.style.width = rowWidth + 'px';
          assert.equal(Math.abs(element.getBoundingClientRect().width - rootSize * 14) < 0.1, true, 'Use a 14rem width that follows the root font size, not a percentage of the row.');
        }
      }
    } finally {
      row.style.cssText = originalRow;
      root.style.cssText = originalRoot;
    }
  });
});

test("Both cards have a 100% width cap", () => {
  expectStyle('.card', 'max-width', '100%');
});

test("Extra content can scroll", () => {
  expectStyle('.card', 'overflow-x', 'auto'); expectStyle('.card', 'overflow-y', 'auto');
});
