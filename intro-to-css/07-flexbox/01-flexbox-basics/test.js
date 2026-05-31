test("row uses core flex properties", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.row\s*\{[^}]*display\s*:\s*flex\s*;/i, "Set .row display to flex");
  assert.match(css, /\.row\s*\{[^}]*gap\s*:\s*12px\s*;/i, "Set .row gap to 12px");
  assert.match(css, /\.row\s*\{[^}]*flex-direction\s*:\s*row\s*;/i, "Set .row flex-direction to row");
});
