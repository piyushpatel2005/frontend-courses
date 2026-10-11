test('Use a 36rem media query to switch between one and three columns.', async () => {
  const sheets = Array.from(document.styleSheets);
  const rules = sheets.flatMap(sheet => { try { return Array.from(sheet.cssRules); } catch (_) { return []; } });
  const target = document.querySelector('.responsive-grid');
  const media = rules.filter(rule => rule instanceof CSSMediaRule && /^\(\s*max-width\s*:\s*36rem\s*\)$/i.test(rule.conditionText));
  assert.equal(media.some(rule => Array.from(rule.cssRules).some(inner => inner.selectorText && target.matches(inner.selectorText) && inner.style.getPropertyValue('grid-template-columns').trim() === '1fr')), true, 'Inside @media (max-width: 36rem), give .responsive-grid one 1fr column.');

  // A real child viewport checks both sides without changing the learner's page.
  const copy = document.documentElement.cloneNode(true);
  copy.querySelectorAll('script, link, iframe').forEach(node => node.remove());
  const frame = document.createElement('iframe');
  frame.style.cssText = 'position:fixed;left:-10000px;top:0;height:600px;border:0;box-sizing:content-box;';
  frame.setAttribute('aria-hidden', 'true');
  try {
    document.body.append(frame);
    const loaded = new Promise(resolve => { frame.onload = resolve; });
    frame.srcdoc = '<!doctype html>' + copy.outerHTML;
    await loaded;
    for (const width of [360, 576, 577, 800]) {
      frame.style.width = width + 'px';
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      const doc = frame.contentDocument, grid = doc.querySelector('.responsive-grid');
      const cards = Array.from(grid.children, el => el.getBoundingClientRect());
      const narrow = frame.contentWindow.matchMedia('(max-width: 36rem)').matches;
      const expected = narrow
        ? cards.every((r, i) => i === 0 || (r.top >= cards[i - 1].bottom && Math.abs(r.left - cards[0].left) < 1.5))
        : cards.every(r => Math.abs(r.top - cards[0].top) < 1.5) && cards[1].left > cards[0].left && cards[2].left > cards[1].left;
      assert.equal(expected, true, 'At a ' + width + 'px viewport, show ' + (narrow ? 'one column.' : 'three columns.'));
    }
  } finally { frame.remove(); }
});
