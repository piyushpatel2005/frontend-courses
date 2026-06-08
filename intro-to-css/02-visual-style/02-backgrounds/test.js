test("hero has background color", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.hero\s*\{[^}]*background-color\s*:\s*#0f172a\s*;/i, "Set .hero background-color to #0f172a");
});

test("hero has gradient background image", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.hero\s*\{[^}]*background-image\s*:\s*linear-gradient\(\s*135deg\s*,\s*#1d4ed8\s*,\s*#06b6d4\s*\)\s*;/i, "Add gradient background-image to .hero");
});

test("hero text is white", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.hero\s*\{[^}]*color\s*:\s*white\s*;/i, "Set .hero color to white");
});
