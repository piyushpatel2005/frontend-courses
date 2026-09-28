test("map card is the positioning reference", () => {
  assert.equal(getComputedStyle(document.querySelector(".map-card")).position, "relative", "Set .map-card to position: relative.");
});

test("pickup pin is absolutely positioned", () => {
  assert.equal(getComputedStyle(document.querySelector(".pickup-pin")).position, "absolute", "Set .pickup-pin to position: absolute.");
});

test("pickup pin has a top offset", () => {
  const style = getComputedStyle(document.querySelector(".pickup-pin"));
  assert.equal(style.top, "12px", "Set .pickup-pin top to 12px.");
});

test("pickup pin has a right offset", () => {
  const style = getComputedStyle(document.querySelector(".pickup-pin"));
  assert.equal(style.right, "12px", "Set .pickup-pin right to 12px.");
});
