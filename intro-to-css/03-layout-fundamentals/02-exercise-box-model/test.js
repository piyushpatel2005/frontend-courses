test("packet has inner padding", () => {
  assert.equal(getComputedStyle(document.querySelector(".packet")).paddingTop, "20px", "Add padding: 20px to .packet.");
});

test("packet has a green border", () => {
  const packet = document.querySelector(".packet");
  assert.equal(getComputedStyle(packet).borderTopWidth, "4px", "Add a 4px border to .packet.");
  assert.equal(getComputedStyle(packet).borderTopColor, "rgb(60, 110, 71)", "Use #3c6e47 for the border color.");
});

test("packet has vertical outer spacing", () => {
  const style = getComputedStyle(document.querySelector(".packet"));
  assert.equal(style.marginTop, "24px", "Add 24px top margin to .packet.");
  assert.equal(style.marginBottom, "24px", "Add 24px bottom margin to .packet.");
});
