test("The featured tool name is labeled through its row", () => {
  const label = document.querySelector(".featured-tool");
  assert.exists(label, "Keep the featured-tool label");
  assert.equal(label.parentElement.children[0].textContent.trim(), "Needle kit (available)",
    "Update the first element child of the label's parent row");
  assert.equal(document.querySelectorAll(".tool-row")[1].children[0].textContent.trim(), "Glue brush",
    "Leave the other tool name unchanged");
});

test("The enclosing article is featured", () => {
  const label = document.querySelector(".featured-tool");
  assert.exists(label, "Keep the featured-tool label");
  assert.equal(label.closest("article").dataset.featured, "yes",
    "Mark the enclosing article, not just the immediate parent row");
  assert.equal(document.querySelectorAll("article")[1].hasAttribute("data-featured"), false,
    "Do not mark the other article");
});
