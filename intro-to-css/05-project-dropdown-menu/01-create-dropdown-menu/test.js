test("dropdown structure exists", () => {
  assert.exists(document.querySelector(".dropdown"), "Add a .dropdown wrapper");
  assert.exists(document.querySelector(".dropdown-toggle"), "Add a .dropdown-toggle element");
  assert.exists(document.querySelector(".dropdown-menu"), "Add a .dropdown-menu panel");
  assert.isAtLeast(document.querySelectorAll(".dropdown-menu a").length, 3, "Add at least 3 links inside .dropdown-menu");
});

test("dropdown uses required positioning and hover rules", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.dropdown\s*\{[^}]*position\s*:\s*relative\s*;/i, "Set .dropdown to position: relative");
  assert.match(css, /\.dropdown-menu\s*\{[^}]*display\s*:\s*none\s*;/i, "Hide .dropdown-menu by default");
  assert.match(css, /\.dropdown-menu\s*\{[^}]*position\s*:\s*absolute\s*;/i, "Set .dropdown-menu to position: absolute");
  assert.match(css, /\.dropdown:hover\s+\.dropdown-menu\s*\{[^}]*display\s*:\s*block\s*;/i, "Show .dropdown-menu on .dropdown:hover");
});
