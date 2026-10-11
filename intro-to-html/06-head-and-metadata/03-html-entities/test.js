function notes() { return Array.from(document.querySelectorAll('body p')).map(p => p.textContent); }
test("visible comparisons", () => {
  assert.equal(notes().some(text => text.includes('5 < 10 and 10 > 5')), true, 'Display both comparisons in a paragraph');
});
test("copyright line", () => {
  assert.equal(notes().some(text => /©.*all rights reserved/i.test(text)), true, 'Add a copyright paragraph including All rights reserved');
});
test("literal ampersand", () => {
  assert.equal(notes().some(text => text.includes('&')), true, 'Display a literal ampersand in a paragraph');
});
test("non-breaking space", () => {
  assert.equal(notes().some(text => /\S\u00a0\S/.test(text)), true, 'Put a non-breaking space between words or a number and unit in a paragraph');
});
