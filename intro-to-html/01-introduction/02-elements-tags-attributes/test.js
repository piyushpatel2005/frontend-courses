test("page has a main heading with id", () => {
  var h1 = document.querySelector("h1#title");
  assert.exists(h1, "Add an <h1 id=\"title\"> element");
  assert.notEqual(h1.textContent.trim(), "", "The <h1> should have some text");
});

test("page has a paragraph", () => {
  assert.count("p", 1, "Add a <p> element below the heading");
});

test("paragraph contains a line break", () => {
  var br = document.querySelector("p br");
  assert.exists(br, "Add a <br> self-closing tag inside your <p>");
});
