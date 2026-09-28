test("Only the original stations are staffed", () => {
  const rows = Array.from(document.querySelectorAll("#stations > li.station"), (row) => row.textContent.trim());
  assert.equal(rows.filter((name) => name === "Printing — staffed").length, 1,
    "Staff the original Printing station once");
  assert.equal(rows.filter((name) => name === "Sewing — staffed").length, 1,
    "Staff the original Sewing station once");
});

test("Each original station has one unstaffed backup", () => {
  const rows = Array.from(document.querySelectorAll("#stations > li.station"), (row) => row.textContent.trim());
  assert.equal(rows.length, 4, "Keep both original stations and add one backup for each");
  assert.equal(rows.filter((name) => name === "Printing — backup").length, 1,
    "Add an unstaffed Printing backup");
  assert.equal(rows.filter((name) => name === "Sewing — backup").length, 1,
    "Add an unstaffed Sewing backup");
});

test("The live count includes the appended backups", () => {
  assert.equal(document.getElementById("live-count").textContent.trim(), "4",
    "Show the live collection's final size");
});

test("The earlier static count remains two", () => {
  assert.equal(document.getElementById("static-count").textContent.trim(), "2",
    "Show the static NodeList's original size");
});
