test("page has a heading", () => {
  assert.count("h1", 1, "Add an <h1> title for the article");
});

test("page has at least two paragraphs", () => {
  var ps = document.querySelectorAll("p");
  assert.exists(ps.length >= 2, "Add at least two <p> paragraphs");
});

test("page uses em or strong for emphasis", () => {
  var em = document.querySelector("em");
  var strong = document.querySelector("strong");
  assert.exists(em || strong, "Use <em> or <strong> to emphasize some text");
});

test("page has a horizontal rule between sections", () => {
  assert.count("hr", 1, "Add a <hr> to separate sections");
});

test("a paragraph contains a line break", () => {
  var br = document.querySelector("p br");
  assert.exists(br, "Add a <br> inside one of your paragraphs");
});
