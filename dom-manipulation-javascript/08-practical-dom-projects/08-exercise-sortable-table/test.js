test("captioned table has an accessible sort control and original rows", () => {
  const table = document.querySelector("table");
  const heading = document.querySelector("#resource-heading");
  const body = document.querySelector("#resources");
  assert.exists(table.querySelector("caption"), "Keep the table caption");
  assert.equal(heading.tagName, "TH", "Use a column header");
  assert.equal(heading.getAttribute("scope"), "col", "Identify the column");
  assert.equal(heading.getAttribute("aria-sort"), "none", "Begin unsorted");
  const button = heading.querySelector("button");
  assert.exists(button, "Add a keyboard-accessible sort button");
  assert.equal(button.type, "button", "Use a non-submit button");
  assert.equal(button.textContent.trim().length > 0, true, "Give the button a readable label");
  assert.equal(body.rows.length, 3, "Keep all three resources");
});
test("activation sorts A to Z without splitting resource from category", () => {
  const heading = document.querySelector("#resource-heading");
  const body = document.querySelector("#resources");
  const button = heading.querySelector("button");
  if (heading.getAttribute("aria-sort") === "ascending") button.click();
  button.click();
  assert.equal(heading.getAttribute("aria-sort"), "ascending", "Announce ascending order");
  assert.equal([...body.rows].map((row) => row.cells[0].textContent.trim()).join(","), "Extension cord,Hand drill,Tripod", "Sort titles A to Z");
  assert.equal([...body.rows].map((row) => row.cells[1].textContent.trim()).join(","), "Electrical,Tools,Photography", "Move each whole row");
});
test("next activation sorts Z to A and updates aria-sort", () => {
  const heading = document.querySelector("#resource-heading");
  const body = document.querySelector("#resources");
  const button = heading.querySelector("button");
  if (heading.getAttribute("aria-sort") !== "ascending") button.click();
  button.click();
  assert.equal(heading.getAttribute("aria-sort"), "descending", "Announce descending order");
  assert.equal([...body.rows].map((row) => row.cells[0].textContent.trim()).join(","), "Tripod,Hand drill,Extension cord", "Sort titles Z to A");
  assert.equal([...body.rows].map((row) => row.cells[1].textContent.trim()).join(","), "Photography,Tools,Electrical", "Keep categories with titles");
});
