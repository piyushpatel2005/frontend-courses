test("page extends the hierarchy with h3 through h6", () => {
  ["h3", "h4", "h5", "h6"].forEach((tag) => {
    assert.exists(document.querySelector(tag), `Add a <${tag}> heading below the existing h1 and h2 headings`);
  });
});

test("page has a source-only comment", () => {
  const hasComment = Array.from(document.childNodes).some(function walk(node) {
    if (node.nodeType === 8) return true;
    return Array.from(node.childNodes || []).some(walk);
  });
  assert.isTrue(hasComment, "Add an HTML comment above the heading level you extend");
});
