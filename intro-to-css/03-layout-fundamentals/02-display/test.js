test("display values are applied", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.badge\s*\{[^}]*display\s*:\s*inline-block\s*;/i, "Set .badge to inline-block");
  assert.match(css, /\.panel\s*\{[^}]*display\s*:\s*block\s*;/i, "Set .panel to block");
  assert.match(css, /\.hidden\s*\{[^}]*display\s*:\s*none\s*;/i, "Set .hidden to none");
});
