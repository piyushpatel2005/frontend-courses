test("page has a title tag", () => {
  var title = document.querySelector("title");
  assert.exists(title, "Add a <title> inside <head>");
  assert.notEqual(title.textContent.trim(), "", "Give the <title> some text");
});

test("body has a main heading", () => {
  assert.count("h1", 1, "Add an <h1> inside <body>");
});

test("body has a paragraph", () => {
  assert.count("p", 1, "Add a <p> with some text inside <body>");
});
