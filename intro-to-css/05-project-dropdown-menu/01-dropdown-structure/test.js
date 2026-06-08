test("dropdown wrapper and elements exist", () => {
  assert.exists(document.querySelector(".dropdown"), "Add a .dropdown wrapper");
  assert.exists(document.querySelector(".dropdown-toggle"), "Add a .dropdown-toggle element");
  assert.exists(document.querySelector(".dropdown-menu"), "Add a .dropdown-menu panel");
});

test("dropdown menu has at least 3 links", () => {
  assert.isAtLeast(document.querySelectorAll(".dropdown-menu a").length, 3, "Add at least 3 links inside .dropdown-menu");
});

test("dropdown is relatively positioned", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.dropdown\s*\{[^}]*position\s*:\s*relative\s*;/i, "Set .dropdown to position: relative");
});
