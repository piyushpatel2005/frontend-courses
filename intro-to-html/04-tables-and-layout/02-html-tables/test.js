test("page has one schedule table", () => {
  assert.equal(document.querySelectorAll("body table").length, 1, "Add exactly one schedule table");
});

test("table has time, day, and station column headers", () => {
  const row = document.querySelector("body table > thead > tr");
  assert.exists(row, "Add a header row inside <thead>");
  const headers = Array.from(row.children);
  assert.equal(headers.length, 3, "Use three column headers");
  ["time", "day", "station"].forEach((label, index) => {
    assert.equal(headers[index].tagName, "TH", "Use <th> for each header");
    assert.equal(headers[index].getAttribute("scope"), "col", 'Give each header scope="col"');
    assert.equal(headers[index].textContent.trim().toLowerCase(), label, "Label the columns Time, Day, Station in that order");
  });
});

test("table has two three-cell schedule entries", () => {
  const rows = Array.from(document.querySelectorAll("body table > tbody > tr"));
  const ordinary = rows.filter(row => !row.querySelector('[colspan]'));
  assert.equal(ordinary.length >= 2, true, "Add at least two ordinary schedule rows before the announcement");
  ordinary.forEach(row => {
    assert.equal(row.children.length, 3, "Give each schedule entry three cells: time, day, station");
    Array.from(row.children).forEach(cell => {
      assert.equal(cell.tagName, "TD", "Use <td> for schedule data");
      assert.equal(cell.colSpan, 1, "Keep ordinary schedule entries in three separate columns");
      assert.notEqual(cell.textContent.trim(), "", "Write data in each schedule cell");
    });
  });
});

test("last row has a two-column announcement", () => {
  const rows = document.querySelectorAll("body table > tbody > tr");
  const row = rows[rows.length - 1];
  assert.exists(row, "Add the announcement row at the end of <tbody>");
  const cells = Array.from(row.children);
  assert.equal(cells.length, 2, "Use one time cell and one announcement cell");
  cells.forEach(cell => {
    assert.equal(cell.tagName, "TD", "Use <td> in the announcement row");
    assert.notEqual(cell.textContent.trim(), "", "Fill both announcement cells");
  });
  assert.equal(cells[0].colSpan, 1, "The time occupies one column");
  assert.equal(cells[1].getAttribute("colspan"), "2", 'Give the message colspan="2"');
});
