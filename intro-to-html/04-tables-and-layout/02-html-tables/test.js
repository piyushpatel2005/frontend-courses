test("page has a schedule table", () => {
  assert.count("body table", 1, "Add one <table> for the schedule");
});

test("table has column headers", () => {
  const headers = document.querySelectorAll("table thead tr th[scope='col']");
  assert.equal(headers.length >= 3, true, "Add a <thead> row with at least three column headers");
  Array.from(headers).forEach(th => assert.notEqual(th.textContent.trim(), "", "Write a label in each header"));
});

test("table has two populated schedule rows", () => {
  const rows = document.querySelectorAll("table tbody tr");
  assert.equal(rows.length >= 2, true, "Add two rows to <tbody>");
  Array.from(rows).forEach(row => {
    const cells = row.querySelectorAll("td");
    assert.equal(cells.length >= 2, true, "Include schedule data in every row");
    Array.from(cells).forEach(cell => assert.notEqual(cell.textContent.trim(), "", "Write schedule data in each cell"));
  });
});

test("schedule has a two-column cell", () => {
  const cell = document.querySelector('table tbody td[colspan="2"]');
  assert.exists(cell, 'Add a <td colspan="2"> in a schedule row');
  assert.notEqual(cell.textContent.trim(), "", "Describe what the spanning cell represents");
});
