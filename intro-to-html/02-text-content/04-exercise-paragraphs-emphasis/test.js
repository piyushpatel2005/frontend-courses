test("log has a heading", () => {
  assert.count("body h1", 1, "Add one <h1> for the survey log");
  assert.notEqual(document.querySelector("body h1").textContent.trim(), "", "Name the log");
});

test("log begins with a two-sentence paragraph", () => {
  const first = document.querySelector("body p");
  assert.exists(first, "Add the first <p> about the landing");
  assert.equal((first.textContent.match(/[.!?]/g) || []).length >= 2, true, "Write two sentences in the first paragraph");
});

test("first paragraph emphasizes a phrase", () => {
  const em = document.querySelector("body p:first-of-type em");
  assert.exists(em, "Use <em> inside the first paragraph");
  assert.notEqual(em.textContent.trim(), "", "Write an emphasized phrase");
});

test("second paragraph highlights an important detail", () => {
  const second = document.querySelectorAll("body p")[1];
  assert.exists(second, "Add a second paragraph");
  const strong = second.querySelector("strong");
  assert.exists(strong, "Use <strong> inside the second paragraph");
  assert.notEqual(strong.textContent.trim(), "", "Write an important detail");
});

test("first paragraph contains a line break", () => {
  assert.exists(document.querySelector("body p:first-of-type br"), "Add a <br> inside the first paragraph");
});

test("divider separates the two paragraphs", () => {
  const first = document.querySelector("body p");
  const second = document.querySelectorAll("body p")[1];
  const rule = document.querySelector("body hr");
  assert.exists(rule, "Add an <hr> between the paragraphs");
  assert.equal(Boolean(first && second && (first.compareDocumentPosition(rule) & Node.DOCUMENT_POSITION_FOLLOWING) && (rule.compareDocumentPosition(second) & Node.DOCUMENT_POSITION_FOLLOWING)), true, "Place <hr> between the paragraphs");
});
