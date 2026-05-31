test("resume uses semantic wrapper tags", () => {
  assert.count("header", 1, "Add one <header> for resume heading");
  assert.count("main", 1, "Add one <main> for resume content");
  assert.count("footer", 1, "Add one <footer> for contact details");
});

test("main has at least three sections", () => {
  const sections = document.querySelectorAll("main section");
  assert.isAtLeast(sections.length, 3, "Add at least three sections in main");
});

test("skills list exists", () => {
  const list = document.querySelector("main section ul");
  assert.exists(list, "Add an unordered list for skills");
  assert.isAtLeast(list.querySelectorAll("li").length, 3, "Skills list should include at least 3 items");
});
