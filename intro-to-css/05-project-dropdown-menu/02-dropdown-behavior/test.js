test("dropdown menu is hidden by default", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.dropdown-menu\s*\{[^}]*display\s*:\s*none\s*;/i, "Hide .dropdown-menu by default");
});

test("dropdown menu shows on hover", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.dropdown:hover\s+\.dropdown-menu\s*\{[^}]*display\s*:\s*block\s*;/i, "Show .dropdown-menu on .dropdown:hover");
});

test("dropdown menu is absolutely positioned", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.dropdown-menu\s*\{[^}]*position\s*:\s*absolute\s*;/i, "Set .dropdown-menu to position: absolute");
  assert.match(css, /\.dropdown-menu\s*\{[^}]*top\s*:\s*100%\s*;/i, "Set .dropdown-menu top to 100%");
  assert.match(css, /\.dropdown-menu\s*\{[^}]*left\s*:\s*0\s*;/i, "Set .dropdown-menu left to 0");
});
