test("animated elements exist", () => {
  assert.exists(document.querySelector(".cta-btn"), "Add a .cta-btn button");
  assert.exists(document.querySelector(".badge"), "Add a .badge element");
});

test("cta-btn has transition", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.cta-btn\s*\{[^}]*transition\s*:[^;]*transform\s+0\.2s\s+ease[^;]*;/i, "Add transform transition on .cta-btn");
  assert.match(css, /\.cta-btn\s*\{[^}]*transition\s*:[^;]*background-color\s+0\.2s\s+ease[^;]*;/i, "Add background-color transition on .cta-btn");
});

test("cta-btn has hover transform", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.cta-btn:hover\s*\{[^}]*transform\s*:\s*translateY\(\s*-2px\s*\)\s*;/i, "Add hover transform rule");
});
