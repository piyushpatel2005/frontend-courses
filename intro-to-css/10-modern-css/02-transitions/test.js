test("button has transform transition", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.btn\s*\{[^}]*transition\s*:[^;]*transform\s+0\.2s\s+ease[^;]*;/i, "Add transform transition on .btn");
});

test("button hover transform exists", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.btn:hover\s*\{[^}]*transform\s*:\s*translateY\(\s*-2px\s*\)\s*;/i, "Add hover translateY(-2px)");
});

test("button has background-color transition", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.btn\s*\{[^}]*transition\s*:[^;]*background-color\s+0\.2s\s+ease[^;]*;/i, "Add background-color transition on .btn");
});
