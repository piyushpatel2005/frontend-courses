test("table structure exists", () => {
  const wrap = document.querySelector(".table-wrap");
  const table = document.querySelector(".table-wrap table");
  assert.exists(wrap, "Add a .table-wrap container");
  assert.exists(table, "Add a table inside .table-wrap");
  assert.isAtLeast(table.querySelectorAll("thead th").length, 4, "Add at least 4 table headers");
  assert.isAtLeast(table.querySelectorAll("tbody tr").length, 3, "Add at least 3 table body rows");
});

test("responsive overflow and media query rules exist", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.table-wrap\s*\{[^}]*overflow-x\s*:\s*auto\s*;/i, "Set .table-wrap overflow-x to auto");
  assert.match(css, /th\s*,\s*td\s*\{[^}]*padding\s*:/i, "Add padding styles for th and td");
  assert.match(css, /@media\s*\(\s*max-width\s*:\s*640px\s*\)\s*\{/i, "Add media query for max-width: 640px");
});
