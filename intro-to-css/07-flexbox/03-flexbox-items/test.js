test("layout and item flex values exist", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.layout\s*\{[^}]*display\s*:\s*flex\s*;/i, "Set .layout display to flex");
  assert.match(css, /\.main\s*\{[^}]*flex\s*:\s*2\s*;/i, "Set .main flex to 2");
  assert.match(css, /\.aside\s*\{[^}]*flex\s*:\s*1\s*;/i, "Set .aside flex to 1");
});
