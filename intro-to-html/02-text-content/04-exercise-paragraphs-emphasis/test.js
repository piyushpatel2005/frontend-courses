test("page has a heading", () => {
  assert.count("h1", 1, "Add an <h1> title for the recap");
});

test("page has at least two paragraphs", () => {
  const ps = document.querySelectorAll("p");
  assert.exists(ps.length >= 2, "Add at least two <p> paragraphs");
});

test("page uses em for emphasis", () => {
  const em = document.querySelector("em");
  assert.exists(em, "Use <em> to emphasize the book or topic title");
});

test("page uses strong for importance", () => {
  const strong = document.querySelector("strong");
  assert.exists(strong, "Use <strong> to highlight an important detail or date");
});

test("page has a horizontal rule between paragraphs", () => {
  assert.count("hr", 1, "Add a <hr> to separate the two paragraphs");
});

test("a paragraph contains a line break", () => {
  const br = document.querySelector("p br");
  assert.exists(br, "Add a <br> inside one of your paragraphs");
});