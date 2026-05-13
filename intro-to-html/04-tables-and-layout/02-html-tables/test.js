test("page has a table", () => {
  assert.count("table", 1, "Add a <table> element");
});

test("table has a thead with th cells", () => {
  var thead = document.querySelector("table thead");
  assert.exists(thead, "Wrap your header row in a <thead>");
  var ths = document.querySelectorAll("thead th");
  assert.exists(ths.length >= 3, "Add at least 3 <th> header cells");
});

test("table has a tbody with at least 2 rows", () => {
  var rows = document.querySelectorAll("tbody tr");
  assert.exists(rows.length >= 2, "Add at least 2 <tr> rows inside a <tbody>");
});

test("table has a cell with colspan", () => {
  var spanned = document.querySelector("td[colspan], th[colspan]");
  assert.exists(spanned, "Add a colspan attribute to at least one cell");
});
