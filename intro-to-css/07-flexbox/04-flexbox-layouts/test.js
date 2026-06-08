test("cards uses display flex", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.cards\s*\{[^}]*display\s*:\s*flex\s*;/i, "Set .cards display to flex");
});

test("cards wraps flex items", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.cards\s*\{[^}]*flex-wrap\s*:\s*wrap\s*;/i, "Set .cards flex-wrap to wrap");
});

test("cards has gap", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.cards\s*\{[^}]*gap\s*:\s*16px\s*;/i, "Set .cards gap to 16px");
});
