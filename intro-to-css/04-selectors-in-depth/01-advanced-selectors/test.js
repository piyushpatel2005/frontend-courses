test("advanced selectors exist", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.card\s+p\s*\{[^}]*color\s*:\s*#334155\s*;/i, "Use .card p selector with color #334155");
  assert.match(css, /\.card\s*>\s*h2\s*\{[^}]*font-size\s*:\s*20px\s*;/i, "Use .card > h2 selector with font-size 20px");
  assert.match(css, /a\[target="_blank"\]\s*\{[^}]*text-decoration\s*:\s*underline\s*;/i, "Use attribute selector for links with target=_blank");
});
