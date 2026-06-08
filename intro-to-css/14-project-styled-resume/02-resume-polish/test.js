test("sections use card styles", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /section\s*\{[^}]*border\s*:/i, "Add border style for sections");
  assert.match(css, /section\s*\{[^}]*padding\s*:/i, "Add padding style for sections");
  assert.match(css, /section\s*\{[^}]*background/i, "Add subtle section background color");
});

test("resume collapses to one column on small screens", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /@media\s*\(\s*max-width\s*:\s*768px\s*\)\s*\{[\s\S]*\.resume-layout\s*\{[^}]*grid-template-columns\s*:\s*1fr\s*;/i, "Add responsive one-column layout at max-width 768px");
});

test("resume links have hover state", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /a:hover\s*\{[^}]*color\s*:/i, "Add link hover color style");
});
