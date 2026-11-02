test("document has a meaningful title", () => {
  const title = document.querySelector("head title");
  assert.exists(title, "Use the supplied <title> in <head>");
  assert.notEqual(title.textContent.trim(), "", "Give the <title> some text");
});

test("body has one named crew heading", () => {
  assert.equal(document.querySelectorAll("body h1").length, 1, "Add exactly one non-empty <h1> in the body");
  assert.notEqual(document.querySelector("body h1").textContent.trim(), "", "Name a crew member in the heading");
});

test("body has a profile paragraph", () => {
  const paragraph = document.querySelector("body p");
  assert.exists(paragraph, "Add a <p> describing the crew member");
  assert.notEqual(paragraph.textContent.trim(), "", "Write a profile description");
});

test("comment appears before the heading", () => {
  const heading = document.querySelector("body h1");
  assert.exists(heading, "Add the crew heading first");
  let node = heading.previousSibling;
  while (node && node.nodeType === 3 && !node.textContent.trim()) node = node.previousSibling;
  assert.equal(node?.nodeType, 8, "Add a comment immediately above the <h1>");
  assert.equal(/^\s*TODO:\s*Step/i.test(node.textContent), false, "Write your own source note, not a supplied TODO marker");
  assert.notEqual(node.textContent.trim(), "", "Write a source note in the comment");
});
