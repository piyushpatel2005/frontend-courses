test("animated elements exist", () => {
  assert.exists(document.querySelector(".cta-btn"), "Add a .cta-btn button");
  assert.exists(document.querySelector(".badge"), "Add a .badge element");
});

test("transition and hover styles exist", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.cta-btn\s*\{[^}]*transition\s*:[^;]*transform\s+0\.2s\s+ease[^;]*;/i, "Add transform transition on .cta-btn");
  assert.match(css, /\.cta-btn\s*\{[^}]*transition\s*:[^;]*background-color\s+0\.2s\s+ease[^;]*;/i, "Add background-color transition on .cta-btn");
  assert.match(css, /\.cta-btn:hover\s*\{[^}]*transform\s*:\s*translateY\(\s*-2px\s*\)\s*;/i, "Add hover transform rule");
});

test("keyframe animation is configured", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /@keyframes\s+pulse\s*\{/i, "Define @keyframes pulse");
  assert.match(css, /\.badge\s*\{[^}]*animation\s*:\s*pulse\s+1\.5s\s+infinite\s*;/i, "Apply pulse animation on .badge");
});
