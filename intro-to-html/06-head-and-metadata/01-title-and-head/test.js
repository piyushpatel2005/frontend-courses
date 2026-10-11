test("walking-club title", () => {
  const title = document.head.querySelector("title");
  assert.exists(title, "Add a title in head");
  assert.equal(/walking club/i.test(title.textContent) && /river/i.test(title.textContent), true, "Name the walking-club walk in the tab");
});

test("mobile viewport", () => {
  const tag = document.head.querySelector('meta[name="viewport"]');
  assert.exists(tag, "Add the viewport meta tag inside head");
  const parts = (tag.getAttribute('content') || '').toLowerCase().split(',').map(part => part.replace(/\s/g, ''));
  assert.equal(parts.includes('width=device-width') && parts.some(part => /^initial-scale=1(?:\.0+)?$/.test(part)), true, "Use device width and initial scale 1");
});

test("walk description", () => {
  const tag = document.head.querySelector('meta[name="description"]');
  assert.exists(tag, "Add a description inside head");
  assert.equal((tag.content || '').trim().length >= 20 && /river|walk/i.test(tag.content), true, "Describe the river walk in at least 20 characters");
});
