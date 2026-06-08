test("table wrap container exists", () => {
  const wrap = document.querySelector(".table-wrap");
  const table = document.querySelector(".table-wrap table");
  assert.exists(wrap, "Add a .table-wrap container");
  assert.exists(table, "Add a table inside .table-wrap");
});

test("table has at least 4 columns and 3 rows", () => {
  const table = document.querySelector(".table-wrap table");
  assert.isAtLeast(table.querySelectorAll("thead th").length, 4, "Add at least 4 table headers");
  assert.isAtLeast(table.querySelectorAll("tbody tr").length, 3, "Add at least 3 table body rows");
});

test("header row has distinct background", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /th\s*\{[^}]*background/i, "Add background color to th");
});
