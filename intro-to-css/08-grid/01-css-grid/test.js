test("grid uses display grid", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.grid\s*\{[^}]*display\s*:\s*grid\s*;/i, "Set .grid display to grid");
});

test("grid has two columns", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.grid\s*\{[^}]*grid-template-columns\s*:\s*1fr\s+1fr\s*;/i, "Set two equal columns");
});

test("grid has gap", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.grid\s*\{[^}]*gap\s*:\s*12px\s*;/i, "Set grid gap to 12px");
});
