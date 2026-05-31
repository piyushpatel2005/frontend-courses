test("toolbar alignment properties exist", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.toolbar\s*\{[^}]*display\s*:\s*flex\s*;/i, "Set .toolbar display to flex");
  assert.match(css, /\.toolbar\s*\{[^}]*justify-content\s*:\s*space-between\s*;/i, "Set justify-content to space-between");
  assert.match(css, /\.toolbar\s*\{[^}]*align-items\s*:\s*center\s*;/i, "Set align-items to center");
});
