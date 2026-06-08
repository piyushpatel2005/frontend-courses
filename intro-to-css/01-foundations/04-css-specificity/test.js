test("element rule exists", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /p\s*\{[^}]*color\s*:\s*gray\s*;/i, "Add p { color: gray; }");
});

test("class rule exists", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.highlight\s*\{[^}]*color\s*:\s*orange\s*;/i, "Add .highlight { color: orange; }");
});

test("id rule exists and wins", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /#intro\s*\{[^}]*color\s*:\s*green\s*;/i, "Add #intro { color: green; }");
  const p = document.querySelector("#intro");
  assert.equal(getComputedStyle(p).color, "rgb(0, 128, 0)", "Final color should be green due to specificity");
});
