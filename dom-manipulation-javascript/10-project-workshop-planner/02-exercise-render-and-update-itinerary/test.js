test("renders two rows with each time and track", () => {
  const rows = [...document.querySelectorAll("#sessions li")];
  assert.equal(rows.length, 2);
  assert.equal(rows[0].textContent.includes("09:00") && rows[0].textContent.includes("Art"), true);
  assert.equal(rows[1].textContent.includes("11:00") && rows[1].textContent.includes("Making"), true);
});
test("session titles display literal markup-like text", () => {
  const session = window.workshopSessions[1];
  const previousTitle = session.title;
  try {
    session.title = "<em>Repair café</em>";
    renderSessions();
    const rows = document.querySelectorAll("#sessions li");
    assert.equal(rows.length, 2);
    assert.equal(rows[0].textContent.includes("Screen printing basics"), true);
    assert.equal(rows[1].textContent.includes("<em>Repair café</em>"), true);
    assert.equal(rows[1].querySelector("em"), null, "Never parse a session title as HTML");
  } finally {
    session.title = previousTitle;
    renderSessions();
  }
});
test("update rerenders without duplicate rows", () => {
  document.querySelector("#update-session").click();
  const rows = [...document.querySelectorAll("#sessions li")];
  assert.equal(rows.length, 2);
  assert.equal(rows[0].textContent.includes("10:00"), true);
});
