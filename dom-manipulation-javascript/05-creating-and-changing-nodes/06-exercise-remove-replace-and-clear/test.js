test("Expired tour is removed", () => {
  assert.equal(document.querySelector("#expired"), null, "Remove the expired item");
  assert.exists(document.querySelector("#exhibits"), "Keep the exhibit list");
});
test("Corrected hours replace the old node in place", () => {
  const list = document.querySelector("#exhibits");
  assert.exists(list);
  assert.equal(document.querySelector("#old-hours"), null, "Replace the old hours node");
  assert.equal(list.children.length, 2, "Keep the sculpture item and one corrected hours item");
  assert.equal(list.firstElementChild?.textContent, "Gallery opens at 10 am", "Put new hours where old hours were");
  assert.equal(list.firstElementChild?.children.length, 0, "Use plain text for the hours");
  assert.equal(list.lastElementChild?.textContent, "Sculpture walk", "Keep Sculpture walk last");
});
test("Draft list is cleared but remains in the page", () => {
  const drafts = document.querySelector("#drafts");
  assert.exists(drafts, "Keep the drafts list itself");
  assert.equal(drafts.childNodes.length, 0, "Clear every child of #drafts");
});
