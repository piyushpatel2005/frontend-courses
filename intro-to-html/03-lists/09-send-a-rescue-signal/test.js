test("rescue signal has one main heading", () => {
  assert.equal(document.querySelectorAll("body h1").length, 1, "Add exactly one non-empty <h1> in the body");
  assert.notEqual(document.querySelector("body h1").textContent.trim(), "", "Give the heading text");
});

test("rescue signal reports the status", () => {
  const paragraph = document.querySelector("body p");
  assert.exists(paragraph, "Add a status paragraph below the heading");
  assert.equal(paragraph.textContent.trim().length >= 20, true, "Write at least 20 characters in the paragraph");
});

test("rescue signal has three list items", () => {
  const lists = Array.from(document.querySelectorAll("body ul"));
  assert.equal(lists.some(list => {
    const items = Array.from(list.children).filter(item => item.tagName === "LI");
    return items.length >= 3 && items.every(item => item.textContent.trim());
  }), true, "Add one bulleted list with at least three non-empty items");
});
