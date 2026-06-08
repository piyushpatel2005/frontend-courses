test("pulse keyframes are defined", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /@keyframes\s+pulse\s*\{/i, "Define @keyframes pulse");
});

test("badge uses pulse animation", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.badge\s*\{[^}]*animation\s*:\s*pulse\s+1\.5s\s+infinite\s*;/i, "Apply pulse animation on .badge");
});

test("both animated elements are in the page", () => {
  assert.exists(document.querySelector(".cta-btn"), "Keep the .cta-btn button");
  assert.exists(document.querySelector(".badge"), "Keep the .badge element");
});
