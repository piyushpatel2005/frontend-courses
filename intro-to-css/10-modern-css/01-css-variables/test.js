test("root variables are defined", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /:root\s*\{[^}]*--brand\s*:\s*#0ea5e9\s*;/i, "Define --brand in :root");
  assert.match(css, /:root\s*\{[^}]*--space\s*:\s*16px\s*;/i, "Define --space in :root");
});

test("variables are consumed", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.title\s*\{[^}]*color\s*:\s*var\(\s*--brand\s*\)\s*;/i, "Use var(--brand) on .title");
  assert.match(css, /\.panel\s*\{[^}]*padding\s*:\s*var\(\s*--space\s*\)\s*;/i, "Use var(--space) on .panel");
});
