test("Welcome is the first agenda item", () => {
  const agenda = document.querySelector("#agenda");
  assert.exists(agenda, "Keep the agenda list");
  assert.equal(agenda.firstElementChild.tagName, "LI", "Welcome should be an li");
  assert.equal(agenda.firstElementChild.textContent, "Welcome", "Put Welcome at the start");
});
test("Questions is immediately before Closing", () => {
  const closing = document.querySelector("#closing");
  assert.exists(closing, "Keep the #closing item");
  assert.equal(closing.previousElementSibling?.tagName, "LI", "Create an li before Closing");
  assert.equal(closing.previousElementSibling?.textContent, "Questions", "Place Questions directly before Closing");
  assert.equal(document.querySelectorAll("#agenda > li").length, 4, "Keep both original agenda items");
});
