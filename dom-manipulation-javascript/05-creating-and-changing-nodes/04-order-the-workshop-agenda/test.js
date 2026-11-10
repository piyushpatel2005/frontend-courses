// Native focus/layout checks need a rendered document, not only parsed markup.
async function withPreviewLayout(check) {
  await new Promise(resolve => requestAnimationFrame(resolve));
  return await check();
}
test("Welcome is the first agenda item", () => withPreviewLayout(() => {
  const agenda = document.querySelector("#agenda");
  assert.exists(agenda, "Keep the agenda list");
  assert.equal(agenda.firstElementChild.tagName, "LI", "Welcome should be an li");
  assert.equal(agenda.firstElementChild.textContent, "Welcome", "Put Welcome at the start");
}));
test("Questions is immediately before Closing", () => withPreviewLayout(() => {
  const closing = document.querySelector("#closing");
  assert.exists(closing, "Keep the #closing item");
  assert.equal(closing.previousElementSibling?.tagName, "LI", "Create an li before Closing");
  assert.equal(closing.previousElementSibling?.textContent, "Questions", "Place Questions directly before Closing");
  assert.equal(closing.previousElementSibling?.previousElementSibling?.textContent, "Break", "Keep the original break before Questions");
}));
