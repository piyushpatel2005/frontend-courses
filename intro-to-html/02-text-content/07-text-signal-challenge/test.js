test("recipe card has one main heading", () => {
  assert.count("body h1", 1, "Add exactly one non-empty <h1> in the page body");
  assert.notEqual(document.querySelector("body h1").textContent.trim(), "", "Give the heading text");
});

test("recipe card explains the recipe", () => {
  const paragraph = document.querySelector("body p");
  assert.exists(paragraph, "Add a paragraph below the heading");
  assert.isAtLeast(paragraph.textContent.trim().length, 20, "Write at least 20 characters in the paragraph");
});

test("recipe card has three list items", () => {
  assert.isAtLeast(document.querySelectorAll("body ul li").length, 3, "Add a bulleted list with at least three items");
});
