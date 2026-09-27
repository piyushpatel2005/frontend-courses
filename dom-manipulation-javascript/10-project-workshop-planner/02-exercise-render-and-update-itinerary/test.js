test("renders two complete session rows from state", () => {
  const rows = [...document.querySelectorAll("#sessions li")];
  assert.equal(rows.length, 2, "Render both sessions when the page loads");
  assert.equal(rows[0].textContent.includes("09:00") && rows[0].textContent.includes("Screen printing basics") && rows[0].textContent.includes("Art"), true, "Show the first session's time, title and track");
  assert.equal(rows[1].textContent.includes("11:00") && rows[1].textContent.includes("Repair café") && rows[1].textContent.includes("Making"), true, "Show the second session's details");
});
test("updates a time and rerenders without duplicates", () => {
  document.querySelector("#update-session").click();
  const rows = [...document.querySelectorAll("#sessions li")];
  assert.equal(rows.length, 2, "Updating should not add extra rows");
  assert.equal(rows[0].textContent.includes("10:00"), true, "Display the revised first time");
});
test("rerendered titles remain literal text", () => {
  const button = document.querySelector("#update-session");
  const rows = document.querySelectorAll("#sessions li");
  if (rows.length) rows[0].textContent = "probe";
  sessions[0].title = "<em>Safe</em>";
  button.click();
  const first = document.querySelector("#sessions li");
  assert.exists(first, "Rerender a first row");
  assert.equal(first.textContent.includes("<em>Safe</em>"), true, "Keep typed brackets as text");
  assert.equal(first.querySelector("em"), null, "Do not parse a title as HTML");
});
