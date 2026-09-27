test("Expired tour is removed", () => {
  assert.equal(document.querySelector("#expired"), null, "Remove the expired item");
  assert.exists(document.querySelector("#exhibits"), "Keep the exhibit list");
});
test("Corrected hours replace the old node in place", () => {
  const list = document.querySelector("#exhibits");
  assert.exists(list);
  assert.equal(document.querySelector("#old-hours"), null, "Replace the old hours node");
  const sculpture = [...list.children].find(item => item.textContent === "Sculpture walk");
  assert.exists(sculpture, "Keep Sculpture walk");
  const corrected = sculpture.previousElementSibling;
  assert.equal(corrected?.tagName, "LI", "Replace the old hours with an li");
  assert.equal(corrected?.textContent, "Gallery opens at 10 am", "Put new hours directly before Sculpture walk");
  assert.equal(corrected?.children.length, 0, "Use plain text for the hours");
});
test("Draft list is cleared but remains in the page", () => {
  const drafts = document.querySelector("#drafts");
  assert.exists(drafts, "Keep the drafts list itself");
  assert.equal(drafts.childNodes.length, 0, "Clear every child of #drafts");
});
