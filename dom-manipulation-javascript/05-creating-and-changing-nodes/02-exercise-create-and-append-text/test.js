test("The Hobbit is a text-only list item", () => {
  const items = document.querySelectorAll("#books > li");
  assert.equal(items.length, 2, "Create one new li without removing the original book");
  assert.equal(items[1].textContent, "The Hobbit", "Set the new item's textContent to The Hobbit");
  assert.equal(items[1].children.length, 0, "The book title should be text, not nested HTML");
});
test("New book is appended last", () => {
  const list = document.querySelector("#books");
  assert.exists(list, "Keep the #books list");
  assert.equal(list.lastElementChild.textContent, "The Hobbit", "Append the new book after the existing one");
});
