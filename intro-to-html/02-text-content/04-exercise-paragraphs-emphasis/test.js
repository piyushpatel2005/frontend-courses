test("log has a heading", () => {
  assert.count("body h1", 1, "Add one <h1> for the survey log");
  assert.notEqual(document.querySelector("body h1").textContent.trim(), "", "Name the log");
});

test("log begins with a two-sentence paragraph", () => {
  const first = document.querySelector("body p");
  assert.exists(first, "Add the first <p> about the landing");
  assert.equal((first.textContent.match(/[^.!?\s][^.!?]*[.!?]/g) || []).length >= 2, true, "Write two sentences in the first paragraph");
});

test("first paragraph emphasizes a phrase", () => {
  const em = document.querySelector("body p:first-of-type em");
  assert.exists(em, "Use <em> inside the first paragraph");
  assert.notEqual(em.textContent.trim(), "", "Write an emphasized phrase");
});

test("second paragraph gives a priority update", () => {
  const second = document.querySelectorAll("body p")[1];
  assert.exists(second, "Add a second paragraph for the update");
  assert.notEqual(second.textContent.trim(), "", "Write the priority update");
});

test("second paragraph highlights an important detail", () => {
  const second = document.querySelectorAll("body p")[1];
  assert.exists(second, "Add a second paragraph");
  const strong = second.querySelector("strong");
  assert.exists(strong, "Use <strong> inside the second paragraph");
  assert.notEqual(strong.textContent.trim(), "", "Write an important detail");
});

test("first paragraph contains a line break", () => {
  const first = document.querySelector("body p");
  const br = first?.querySelector("br");
  assert.exists(br, "Add a <br> between the first paragraph’s sentences");
  const before = document.createRange();
  before.selectNodeContents(first);
  before.setEndBefore(br);
  const after = document.createRange();
  after.selectNodeContents(first);
  after.setStartAfter(br);
  assert.match(before.toString().trim(), /[.!?]$/, "Put the break after the first sentence");
  assert.match(after.toString(), /\S.*[.!?]/, "Keep the second sentence after the break");
});

test("divider separates the two paragraphs", () => {
  const first = document.querySelector("body p");
  const second = document.querySelectorAll("body p")[1];
  const rule = document.querySelector("body hr");
  assert.exists(rule, "Add an <hr> between the paragraphs");
  assert.equal(Boolean(first && second && (first.compareDocumentPosition(rule) & Node.DOCUMENT_POSITION_FOLLOWING) && (rule.compareDocumentPosition(second) & Node.DOCUMENT_POSITION_FOLLOWING)), true, "Place <hr> between the paragraphs");
});
