test("container is relatively positioned", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.container\s*\{[^}]*position\s*:\s*relative\s*;/i, "Set .container to position: relative");
});

test("badge is absolutely positioned", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.badge\s*\{[^}]*position\s*:\s*absolute\s*;/i, "Set .badge to position: absolute");
});

test("badge is placed at top-right", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.badge\s*\{[^}]*top\s*:\s*8px\s*;/i, "Set .badge top to 8px");
  assert.match(css, /\.badge\s*\{[^}]*right\s*:\s*8px\s*;/i, "Set .badge right to 8px");
});
