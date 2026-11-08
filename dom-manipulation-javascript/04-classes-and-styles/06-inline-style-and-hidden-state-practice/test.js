// Native focus/layout checks need a rendered document, not only parsed markup.
async function withPreviewLayout(check) {
  await new Promise(resolve => requestAnimationFrame(resolve));
  return await check();
}
test("Sets a one-off inline border color", () => withPreviewLayout(() => {
  const notice = document.querySelector("#community-notice");
  assert.exists(notice, "Keep #community-notice");
  document.querySelector("#set-border").click();
  assert.equal(notice.style.borderColor !== "", true, "Set an inline border color");
  assert.equal(getComputedStyle(notice).borderTopColor, "rgb(0, 128, 128)", "Set the border to teal");
}));
test("Applies the reusable highlight class", () => withPreviewLayout(() => {
  const notice = document.querySelector("#community-notice");
  assert.exists(notice, "Keep #community-notice");
  document.querySelector("#emphasize").click();
  assert.equal(notice.classList.contains("highlight"), true, "Add highlight with classList");
  assert.equal(notice.classList.contains("note"), true, "Keep the note class");
  assert.equal(getComputedStyle(notice).backgroundColor, "rgb(255, 240, 186)", "Keep the reusable highlight styling in style.css");
}));
test("Dismiss hides the notice", () => withPreviewLayout(() => {
  const notice = document.querySelector("#community-notice");
  notice.hidden = false;
  document.querySelector("#dismiss").click();
  assert.equal(notice.hidden, true, "Set hidden to true when dismissed");
  assert.equal(getComputedStyle(notice).display, "none", "The hidden notice must leave layout");
}));
test("Restore reveals a dismissed notice", () => withPreviewLayout(() => {
  const notice = document.querySelector("#community-notice");
  notice.hidden = true;
  document.querySelector("#restore").click();
  assert.equal(notice.hidden, false, "Set hidden to false when restored");
  assert.visible(notice, "The restored notice must be visible");
}));
