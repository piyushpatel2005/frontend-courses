test("document has a meaningful title", () => {
  const title = document.querySelector("head title");
  assert.exists(title, "Use the supplied <title> in <head>");
  assert.notEqual(title.textContent.trim(), "", "Give the <title> some text");
});

test("body has one named crew heading", () => {
  assert.count("body h1", 1, "Add exactly one <h1> inside <body>");
  assert.notEqual(document.querySelector("body h1").textContent.trim(), "", "Name a crew member in the heading");
});

test("body has a profile paragraph", () => {
  const paragraph = document.querySelector("body p");
  assert.exists(paragraph, "Add a <p> describing the crew member");
  assert.notEqual(paragraph.textContent.trim(), "", "Write a profile description");
});

test("comment appears before the heading", () => {
  const heading = document.querySelector("body h1");
  const comments = Array.from(document.body.childNodes).filter(n => n.nodeType === 8 && n.textContent.trim() && (n.compareDocumentPosition(heading) & Node.DOCUMENT_POSITION_FOLLOWING));
  assert.equal(comments.length >= 1, true, "Add a source-only comment above the <h1>");
});
