test("pseudo-class rules exist", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.btn:hover\s*\{[^}]*background-color\s*:\s*#1d4ed8\s*;/i, "Add .btn:hover background-color #1d4ed8");
  assert.match(css, /li:first-child\s*\{[^}]*font-weight\s*:\s*bold\s*;/i, "Add li:first-child with bold font");
  assert.match(css, /input:focus\s*\{[^}]*outline\s*:\s*2px\s+solid\s+#22c55e\s*;/i, "Add input:focus outline rule");
});
