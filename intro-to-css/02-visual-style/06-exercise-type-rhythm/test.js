test("page uses Georgia for the body font", () => {
  const family = getComputedStyle(document.body).fontFamily.toLowerCase();
  assert.includes(family, "georgia", "Set body font-family to Georgia, serif.");
});

test("note paragraph has roomy line height", () => {
  const paragraph = document.querySelector(".note p");
  const size = parseFloat(getComputedStyle(paragraph).fontSize);
  const lineHeight = parseFloat(getComputedStyle(paragraph).lineHeight);
  assert.equal(lineHeight, size * 1.7, "Set .note p line-height to 1.7.");
});

test("heading has poster-like letter spacing", () => {
  const spacing = getComputedStyle(document.querySelector("h1")).letterSpacing;
  assert.notEqual(spacing, "normal", "Set h1 letter-spacing to 0.04em.");
  assert.equal(parseFloat(spacing), parseFloat(getComputedStyle(document.querySelector("h1")).fontSize) * 0.04, "Set h1 letter-spacing to 0.04em.");
});
