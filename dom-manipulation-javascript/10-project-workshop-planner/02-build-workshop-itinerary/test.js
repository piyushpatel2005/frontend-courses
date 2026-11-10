// Native focus/layout checks need a rendered document, not only parsed markup.
async function withPreviewLayout(check) {
  await new Promise(resolve => requestAnimationFrame(resolve));
  return await check();
}
test("builds a detached safe session row", () => withPreviewLayout(() => {
  for (const session of [
    { title: "<em>Evening clay</em>", time: "18:15", track: "Making" },
    { title: "Paper birds", time: "12:20", track: "Art" }
  ]) {
    const row = createSessionRow(session);
    assert.exists(row, "Return a prepared row");
    assert.equal(row.tagName, "LI");
    assert.equal(row.isConnected, false, "Build the row without inserting it");
    for (const value of [session.title, session.time, session.track]) assert.includes(row.textContent, value);
    assert.equal(row.dataset.title, session.title);
    assert.equal(row.querySelector("em"), null, "Keep title characters literal");
  }
}));
test("renderer inserts every session without duplicates", () => withPreviewLayout(() => {
  const before = window.workshopSessions.map(session => ({ ...session }));
  try {
    assert.equal(document.querySelectorAll("#sessions li").length, 2, "Render at load");
    window.workshopSessions.push({ title: "<b>Evening sketch</b>", time: "19:00", track: "Art" });
    renderSessions();
    renderSessions();
    const rows = [...document.querySelectorAll("#sessions li")];
    assert.equal(rows.length, 3, "Replace old rows before inserting the new list");
    rows.forEach((row, index) => assert.includes(row.textContent, window.workshopSessions[index].title));
    assert.equal(rows[2].querySelector("b"), null);
  } finally {
    window.workshopSessions.splice(0, window.workshopSessions.length, ...before);
    renderSessions();
  }
}));
test("update changes state and rerenders without duplicates", () => withPreviewLayout(() => {
  const first = window.workshopSessions[0];
  const time = first.time;
  try {
    document.querySelector("#update-session").click();
    document.querySelector("#update-session").click();
    assert.equal(first.time, "10:00", "Update the object, not only its displayed text");
    const rows = [...document.querySelectorAll("#sessions li")];
    assert.equal(rows.length, 2);
    assert.includes(rows[0].textContent, "10:00");
  } finally { first.time = time; renderSessions(); }
}));
