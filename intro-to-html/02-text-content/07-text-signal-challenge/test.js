test("rescue signal has one main heading", () => {
  assert.count("body h1", 1, "Add exactly one non-empty <h1> in the page body");
  assert.notEqual(document.querySelector("body h1").textContent.trim(), "", "Give the heading text");
});

test("rescue signal reports the status", () => {
  const paragraph = document.querySelector("body p");
  assert.exists(paragraph, "Add a status paragraph below the heading");
  assert.equal(paragraph.textContent.trim().length >= 20, true, "Write at least 20 characters in the paragraph");
});

test("rescue signal has three list items", () => {
  assert.equal(document.querySelectorAll("body ul li").length >= 3, true, "Add a bulleted list with at least three items");
});
