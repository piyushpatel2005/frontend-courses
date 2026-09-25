test("page has a Meridian signal heading", () => {
  const h1 = document.querySelector("h1");
  assert.exists(h1, "Add an <h1> element");
  assert.notEqual(h1.textContent.trim(), "", "The <h1> should have text");
  assert.match(h1.textContent, /meridian|signal/i, "Use Meridian or Signal in the heading");
});

test("page has at least two signal paragraphs", () => {
  assert.isAtLeast(document.querySelectorAll("p").length, 2, "Add at least two <p> elements");
});
