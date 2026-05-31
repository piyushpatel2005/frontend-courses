test("header and features sections exist", () => {
  assert.exists(document.querySelector(".site-header"), "Add a .site-header section");
  assert.exists(document.querySelector(".features"), "Add a .features section");
  assert.isAtLeast(document.querySelectorAll(".features .card").length, 3, "Add at least 3 feature cards");
});

test("flexbox and grid rules are applied", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.site-header\s*\{[^}]*display\s*:\s*flex\s*;/i, "Set .site-header display to flex");
  assert.match(css, /\.site-header\s*\{[^}]*justify-content\s*:\s*space-between\s*;/i, "Set .site-header justify-content to space-between");
  assert.match(css, /\.features\s*\{[^}]*display\s*:\s*grid\s*;/i, "Set .features display to grid");
  assert.match(css, /\.features\s*\{[^}]*grid-template-columns\s*:\s*repeat\(\s*3\s*,\s*1fr\s*\)\s*;/i, "Use 3-column grid in .features");
});

test("responsive media query for features exists", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /@media\s*\(\s*max-width\s*:\s*900px\s*\)\s*\{[\s\S]*\.features\s*\{[^}]*grid-template-columns\s*:\s*1fr\s*;/i, "Add media query to collapse features to 1 column");
});
