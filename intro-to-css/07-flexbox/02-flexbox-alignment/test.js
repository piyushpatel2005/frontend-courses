test("toolbar uses display flex", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.toolbar\s*\{[^}]*display\s*:\s*flex\s*;/i, "Set .toolbar display to flex");
});

test("toolbar has justify-content", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.toolbar\s*\{[^}]*justify-content\s*:\s*space-between\s*;/i, "Set justify-content to space-between");
});

test("toolbar has align-items", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.toolbar\s*\{[^}]*align-items\s*:\s*center\s*;/i, "Set align-items to center");
});
