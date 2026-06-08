test("button hover changes background", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.btn:hover\s*\{[^}]*background-color\s*:\s*#1d4ed8\s*;/i, "Add .btn:hover background-color #1d4ed8");
});

test("first list item is bold", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /li:first-child\s*\{[^}]*font-weight\s*:\s*bold\s*;/i, "Add li:first-child with bold font");
});

test("input focus has outline", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /input:focus\s*\{[^}]*outline\s*:\s*2px\s+solid\s+#22c55e\s*;/i, "Add input:focus outline rule");
});
