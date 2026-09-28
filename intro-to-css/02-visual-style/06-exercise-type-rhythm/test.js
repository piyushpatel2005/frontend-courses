test("page uses Georgia for the body font", () => {
  const family = getComputedStyle(document.body).fontFamily.toLowerCase();
  assert.includes(family, "georgia", "Set body font-family to Georgia, serif.");
});

test("note paragraph has roomy line height", () => {
  const paragraph = document.querySelector(".note p");
  const computed = getComputedStyle(paragraph);
  const lineHeight = computed.lineHeight;
  const size = parseFloat(computed.fontSize);
  assert.equal(lineHeight === "1.7" || Math.abs(parseFloat(lineHeight) - size * 1.7) < 0.02, true, "Set .note p line-height to 1.7.");
});

test("heading has poster-like letter spacing", () => {
  const spacing = getComputedStyle(document.querySelector("h1")).letterSpacing;
  assert.notEqual(spacing, "normal", "Set h1 letter-spacing to 0.04em.");
  const declared = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules || [])).filter(rule => rule.selectorText === "h1").map(rule => rule.style.getPropertyValue("letter-spacing")).find(Boolean);
  assert.equal(declared, "0.04em", "Set h1 letter-spacing to 0.04em.");
});
