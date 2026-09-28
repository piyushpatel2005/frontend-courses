test("Sets a one-off inline border color", () => {
  const notice = document.querySelector("#community-notice");
  assert.exists(notice, "Keep #community-notice");
  document.querySelector("#set-border").click();
  assert.equal(notice.style.borderColor, "teal", "Set style.borderColor to teal");
  assert.equal(notice.style.borderStyle, "solid", "Make the border visible");
});
test("Applies the reusable highlight class", () => {
  const notice = document.querySelector("#community-notice");
  assert.exists(notice, "Keep #community-notice");
  document.querySelector("#emphasize").click();
  assert.equal(notice.classList.contains("highlight"), true, "Add highlight with classList");
  assert.equal(notice.classList.contains("note"), true, "Keep the note class");
  assert.equal(getComputedStyle(notice).backgroundColor, "rgb(255, 240, 186)", "Keep the reusable highlight styling in style.css");
});
test("Dismiss hides the notice", () => {
  const notice = document.querySelector("#community-notice");
  notice.hidden = false;
  document.querySelector("#dismiss").click();
  assert.equal(notice.hidden, true, "Set hidden to true when dismissed");
});
test("Restore reveals a dismissed notice", () => {
  const notice = document.querySelector("#community-notice");
  notice.hidden = true;
  document.querySelector("#restore").click();
  assert.equal(notice.hidden, false, "Set hidden to false when restored");
});
