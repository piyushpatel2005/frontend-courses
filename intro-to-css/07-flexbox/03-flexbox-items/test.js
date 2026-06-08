test("layout uses display flex", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.layout\s*\{[^}]*display\s*:\s*flex\s*;/i, "Set .layout display to flex");
});

test("main has flex value", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.main\s*\{[^}]*flex\s*:\s*2\s*;/i, "Set .main flex to 2");
});

test("aside has flex value", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.aside\s*\{[^}]*flex\s*:\s*1\s*;/i, "Set .aside flex to 1");
});
