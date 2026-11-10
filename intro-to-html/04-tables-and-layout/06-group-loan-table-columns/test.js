test("column group is between caption and header rows", () => {
  const table = document.querySelector("body > table"), group = table?.querySelector(":scope > colgroup");
  assert.exists(group, "Add <colgroup> inside the table");
  assert.equal(table.querySelectorAll(":scope > colgroup").length, 1, "Use one column group");
  assert.equal(group.previousElementSibling?.tagName, "CAPTION", "Place the group after the caption");
  assert.equal(group.nextElementSibling?.tagName, "THEAD", "Place the group before the thead");
});
test("one column then two day columns", () => {
  const cols = [...document.querySelectorAll("body > table > colgroup > col")];
  assert.equal(cols.length, 2, "Use exactly two <col> elements");
  assert.equal(cols[0].span, 1, "The Tool column occupies one slot");
  assert.equal(cols[1].getAttribute("span"), "2", "Span the two day columns with the second col");
});
test("headers and rows still describe the loans", () => {
  const table = document.querySelector("body > table");
  assert.equal(table?.querySelector("caption")?.textContent.trim(), "Tools borrowed this week", "Keep the caption");
  assert.equal([...table.querySelectorAll("thead th[scope=col]")].map(x => x.textContent.trim()).join("|"), "Tool|Monday|Tuesday", "Keep all three column headers");
  const rows = [...table.querySelectorAll("tbody > tr")];
  assert.equal(rows.length, 2, "Keep both data rows");
  assert.equal(rows.map(r => r.querySelector("th[scope=row]")?.textContent.trim()).join("|"), "Drill|Saw", "Keep the row headers");
  assert.equal(rows.map(r => [...r.querySelectorAll("td")].map(c => c.textContent.trim()).join(",")).join("|"), "2,3|1,2", "Keep the loan counts");
});
