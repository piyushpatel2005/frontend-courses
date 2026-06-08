test("features uses grid with 3 columns", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.features\s*\{[^}]*display\s*:\s*grid\s*;/i, "Set .features display to grid");
  assert.match(css, /\.features\s*\{[^}]*grid-template-columns\s*:\s*repeat\(\s*3\s*,\s*1fr\s*\)\s*;/i, "Use 3-column grid in .features");
  assert.match(css, /\.features\s*\{[^}]*gap\s*:\s*16px\s*;/i, "Set .features gap to 16px");
});

test("responsive media query collapses to 1 column", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /@media\s*\(\s*max-width\s*:\s*900px\s*\)\s*\{[\s\S]*\.features\s*\{[^}]*grid-template-columns\s*:\s*1fr\s*;/i, "Add media query to collapse features to 1 column");
});

test("cards have padding and border radius", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.card\s*\{[^}]*padding\s*:/i, "Add padding to .card");
  assert.match(css, /\.card\s*\{[^}]*border-radius\s*:/i, "Add border-radius to .card");
});
