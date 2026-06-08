test("page has exactly one h1", () => {
  assert.count("h1", 1, "Add exactly one <h1> — it's the main page title");
});

test("page has at least two h2 section headings", () => {
  const h2s = document.querySelectorAll("h2");
  assert.exists(h2s.length >= 2, "Add at least two <h2> section headings");
});

test("page has at least one h3 sub-section", () => {
  assert.count("h3", 1, "Add at least one <h3> sub-section heading");
});

test("page has an html comment", () => {
  const hasComment = Array.from(document.childNodes).some(function walk(node) {
    if (node.nodeType === 8) return true;
    return Array.from(node.childNodes || []).some(walk);
  });
  assert.isTrue(hasComment, "Add an HTML comment above the <h1>");
});
