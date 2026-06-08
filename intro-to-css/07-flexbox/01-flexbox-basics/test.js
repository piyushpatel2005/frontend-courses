test("row uses display flex", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.row\s*\{[^}]*display\s*:\s*flex\s*;/i, "Set .row display to flex");
});

test("row has gap", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.row\s*\{[^}]*gap\s*:\s*12px\s*;/i, "Set .row gap to 12px");
});

test("row has flex direction", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.row\s*\{[^}]*flex-direction\s*:\s*row\s*;/i, "Set .row flex-direction to row");
});
