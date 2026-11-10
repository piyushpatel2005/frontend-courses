test("page has a warm background", () => {
  assert.equal(getComputedStyle(document.body).backgroundColor, "rgb(247, 244, 237)", "Set body background-color to #f7f4ed");
});
test("title has a dark text color", () => {
  const heading = document.querySelector(".poster h1");
  assert.exists(heading, "Keep the poster heading");
  assert.equal(getComputedStyle(heading).color, "rgb(23, 50, 77)", "Set h1 color to #17324d");
});
test("details have comfortable line spacing", () => {
  const details = document.querySelector(".poster .details");
  assert.exists(details, "Keep the event details");
  const style = getComputedStyle(details);
  assert.equal(style.lineHeight, String(parseFloat(style.fontSize) * 1.6) + "px", "Set .details line-height to 1.6");
});
