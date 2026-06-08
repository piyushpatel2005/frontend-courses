test("badge is inline-block", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.badge\s*\{[^}]*display\s*:\s*inline-block\s*;/i, "Set .badge to inline-block");
});

test("panel is block", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.panel\s*\{[^}]*display\s*:\s*block\s*;/i, "Set .panel to block");
});

test("hidden is none", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.hidden\s*\{[^}]*display\s*:\s*none\s*;/i, "Set .hidden to none");
});
