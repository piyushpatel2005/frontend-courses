test("poster keeps its first-step styles and has a green border", () => {
  const poster = document.querySelector(".poster");
  assert.exists(poster, "Keep the poster");
  assert.equal(getComputedStyle(document.body).backgroundColor, "rgb(247, 244, 237)", "Keep the warm page background");
  assert.equal(getComputedStyle(poster.querySelector("h1")).color, "rgb(23, 50, 77)", "Keep the dark heading");
  const details = getComputedStyle(poster.querySelector(".details"));
  assert.equal(details.lineHeight, String(parseFloat(details.fontSize) * 1.6) + "px", "Keep the details line-height at 1.6");
  const style = getComputedStyle(poster);
  assert.equal(style.borderTopWidth, "2px", "Set the poster border width to 2px");
  assert.equal(style.borderTopStyle, "solid", "Use a solid border");
  assert.equal(style.borderTopColor, "rgb(83, 124, 109)", "Use #537c6d for the border");
});
test("poster has rounded corners", () => {
  const style = getComputedStyle(document.querySelector(".poster"));
  assert.equal(style.borderTopLeftRadius, "12px", "Round the poster corners to 12px");
  assert.equal(style.borderBottomRightRadius, "12px", "Round all of the corners");
});
test("poster has a soft downward shadow", () => {
  const style = getComputedStyle(document.querySelector(".poster"));
  const probe = document.createElement("div");
  probe.style.boxShadow = "0 8px 18px rgb(24 54 42 / 15%)";
  document.body.append(probe);
  const expected = getComputedStyle(probe).boxShadow;
  probe.remove();
  assert.equal(style.boxShadow, expected, "Use the supplied soft downward shadow");
});
