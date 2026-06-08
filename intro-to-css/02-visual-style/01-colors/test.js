test("body background color is set", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /body\s*\{[^}]*background(?:-color)?\s*:\s*#101828\s*;/i, "Set body background to #101828");
});

test("h1 text color is set", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /h1\s*\{[^}]*color\s*:\s*#f9fafb\s*;/i, "Set h1 color to #f9fafb");
});

test("tag text color is set", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.tag\s*\{[^}]*color\s*:\s*rgb\(\s*34\s*,\s*197\s*,\s*94\s*\)\s*;/i, "Set .tag color to rgb(34, 197, 94)");
});
