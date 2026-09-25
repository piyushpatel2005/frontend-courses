test("category labels use inline-block", () => {
  assert.equal(getComputedStyle(document.querySelector(".tag")).display, "inline-block", "Set .tag to display: inline-block.");
});

test("swap note uses block layout", () => {
  assert.equal(getComputedStyle(document.querySelector(".swap-note")).display, "block", "Set .swap-note to display: block.");
});

test("helper is removed from layout", () => {
  assert.equal(getComputedStyle(document.querySelector(".hidden-helper")).display, "none", "Set .hidden-helper to display: none.");
});
