test("profile has a unique main region", () => {
  assert.count("main#profile", 1, "Add exactly one <main id=\"profile\"> element");
});

test("profile has a heading and description", () => {
  const main = document.querySelector("main#profile");
  assert.exists(main.querySelector("h1"), "Add an h1 inside #profile");
  const paragraph = main.querySelector("p");
  assert.exists(paragraph, "Add a paragraph inside #profile");
  assert.notEqual(paragraph.textContent.trim(), "", "Write a profile description");
});

test("profile has reusable tags", () => {
  assert.isAtLeast(document.querySelectorAll("#profile .tag").length, 2, "Add at least two elements with class tag");
});
