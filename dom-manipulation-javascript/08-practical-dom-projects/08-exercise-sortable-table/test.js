test("header has a labelled native sort control and unsorted state", () => {
  const heading = document.querySelector("#resource-heading");
  assert.equal(heading.getAttribute("aria-sort"), "none");
  const button = heading.querySelector("button");
  assert.exists(button, "Add a keyboard-accessible sort button");
  assert.equal(button.type, "button");
  assert.equal((button.getAttribute("aria-label") || button.textContent).trim().length > 0, true);
});
function withResourceRows(direction, check) {
  const heading = document.querySelector("#resource-heading");
  const body = document.querySelector("#resources");
  const original = [...body.rows];
  const originalDirection = heading.getAttribute("aria-sort");
  const extra = document.createElement("tr");
  extra.innerHTML = "<td>Apron</td><td>Cloth</td>";
  const rows = [...original, extra];
  const pairs = new Map(rows.map(row => [row, row.textContent]));
  try {
    body.replaceChildren(...rows);
    heading.setAttribute("aria-sort", direction);
    check(heading, body, rows, pairs);
  } finally {
    body.replaceChildren(...original);
    if (originalDirection === null) heading.removeAttribute("aria-sort");
    else heading.setAttribute("aria-sort", originalDirection);
  }
}
function checkRows(body, rows, pairs, expected) {
  assert.equal([...body.rows].map(row => row.cells[0].textContent.trim()).join(","), expected);
  assert.equal([...body.rows].every(row => rows.includes(row)), true, "Move original row nodes rather than replacing them");
  rows.forEach(row => assert.equal(row.textContent, pairs.get(row), "Keep both cells in each original row"));
}
test("first activation sorts whole rows A to Z", () => withResourceRows("none", (heading, body, rows, pairs) => {
  const button = heading.querySelector("button");
  assert.exists(button);
  button.click();
  assert.equal(heading.getAttribute("aria-sort"), "ascending");
  checkRows(body, rows, pairs, "Apron,Extension cord,Hand drill,Tripod");
}));
test("next activation sorts Z to A and continues alternating", () => withResourceRows("ascending", (heading, body, rows, pairs) => {
  const button = heading.querySelector("button");
  assert.exists(button);
  button.click();
  assert.equal(heading.getAttribute("aria-sort"), "descending");
  checkRows(body, rows, pairs, "Tripod,Hand drill,Extension cord,Apron");
  button.click();
  assert.equal(heading.getAttribute("aria-sort"), "ascending");
  checkRows(body, rows, pairs, "Apron,Extension cord,Hand drill,Tripod");
}));
