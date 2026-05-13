test("page has exactly one h1", () => {
  assert.count("h1", 1, "Add exactly one <h1> — it's the main page title");
});

test("page has at least two h2 section headings", () => {
  var h2s = document.querySelectorAll("h2");
  assert.exists(h2s.length >= 2, "Add at least two <h2> section headings");
});

test("page has at least one h3 sub-section", () => {
  assert.count("h3", 1, "Add at least one <h3> sub-section heading");
});
