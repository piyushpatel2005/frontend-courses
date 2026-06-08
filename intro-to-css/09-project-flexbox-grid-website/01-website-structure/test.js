test("header section exists", () => {
  assert.exists(document.querySelector(".site-header"), "Add a .site-header section");
});

test("header uses flexbox alignment", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.site-header\s*\{[^}]*display\s*:\s*flex\s*;/i, "Set .site-header display to flex");
  assert.match(css, /\.site-header\s*\{[^}]*justify-content\s*:\s*space-between\s*;/i, "Set .site-header justify-content to space-between");
  assert.match(css, /\.site-header\s*\{[^}]*align-items\s*:\s*center\s*;/i, "Set .site-header align-items to center");
});

test("features section has at least 3 cards", () => {
  assert.exists(document.querySelector(".features"), "Add a .features section");
  assert.isAtLeast(document.querySelectorAll(".features .card").length, 3, "Add at least 3 feature cards");
});
