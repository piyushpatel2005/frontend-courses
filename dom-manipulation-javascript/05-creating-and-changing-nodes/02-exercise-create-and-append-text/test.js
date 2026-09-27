test("A text-only Hobbit item appears last", () => {
  const items = document.querySelectorAll("#books > li");
  assert.equal(items.length, 2, "Append one item after the original book");
  assert.equal(items[0].textContent, "The Secret Garden", "Keep the original first");
  assert.equal(items[1].textContent, "The Hobbit", "Set the new item's textContent to The Hobbit");
  assert.equal(items[1].children.length, 0, "Use plain text, not nested HTML");
});
