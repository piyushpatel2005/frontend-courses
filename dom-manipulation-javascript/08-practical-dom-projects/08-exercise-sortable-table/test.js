test("captioned table has an accessible sort control and original rows", () => {
  const table = document.querySelector("table");
  const heading = document.querySelector("#resource-heading");
  const body = document.querySelector("#resources");
  assert.equal(heading.getAttribute("aria-sort"), "none", "Begin unsorted");
  const button = heading.querySelector("button");
  assert.exists(button, "Add a keyboard-accessible sort button");
  assert.equal(button.type, "button", "Use a non-submit button");
  assert.equal(button.textContent.trim().length > 0, true, "Give the button a readable label");
});
test("activation sorts A to Z without splitting resource from category", () => {
  const heading = document.querySelector("#resource-heading");
  const body = document.querySelector("#resources");
  const button = heading.querySelector("button");
  // Establish the original order without depending on any earlier test.
  body.replaceChildren(...[...body.rows].sort((a, b) => ["Tripod", "Extension cord", "Hand drill"].indexOf(a.cells[0].textContent.trim()) - ["Tripod", "Extension cord", "Hand drill"].indexOf(b.cells[0].textContent.trim())));
  heading.setAttribute("aria-sort", "none");
  button.click();
  assert.equal(heading.getAttribute("aria-sort"), "ascending", "Announce ascending order");
  assert.equal([...body.rows].map((row) => row.cells[0].textContent.trim()).join(","), "Extension cord,Hand drill,Tripod", "Sort titles A to Z");
  assert.equal([...body.rows].map((row) => row.cells[1].textContent.trim()).join(","), "Electrical,Tools,Photography", "Move each whole row");
});
test("next activation sorts Z to A and updates aria-sort", () => {
  const heading = document.querySelector("#resource-heading");
  const body = document.querySelector("#resources");
  const button = heading.querySelector("button");
  body.replaceChildren(...[...body.rows].sort((a, b) => a.cells[0].textContent.trim().localeCompare(b.cells[0].textContent.trim())));
  heading.setAttribute("aria-sort", "ascending"); // Set up the second activation directly.
  button.click();
  assert.equal(heading.getAttribute("aria-sort"), "descending", "Announce descending order");
  assert.equal([...body.rows].map((row) => row.cells[0].textContent.trim()).join(","), "Tripod,Hand drill,Extension cord", "Sort titles Z to A");
  assert.equal([...body.rows].map((row) => row.cells[1].textContent.trim()).join(","), "Photography,Tools,Electrical", "Keep categories with titles");
});
