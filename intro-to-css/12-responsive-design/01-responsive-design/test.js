test("mobile-first grid setup exists", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.layout\s*\{[^}]*display\s*:\s*grid\s*;/i, "Set .layout display to grid");
  assert.match(css, /\.layout\s*\{[^}]*grid-template-columns\s*:\s*1fr\s*;/i, "Set default columns to 1fr");
});

test("media query creates two columns", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /@media\s*\(\s*min-width\s*:\s*768px\s*\)\s*\{[\s\S]*\.layout\s*\{[^}]*grid-template-columns\s*:\s*1fr\s+1fr\s*;/i, "Add media query with two columns at 768px+");
});
