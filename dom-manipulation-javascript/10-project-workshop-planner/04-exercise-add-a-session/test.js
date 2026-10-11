function withSessions(check) {
  const saved = window.workshopSessions.map(session => ({ ...session }));
  try { check(); }
  finally {
    window.workshopSessions.splice(0, window.workshopSessions.length, ...saved);
    renderSessions();
  }
}
function submitSession(title, time, track = "Art") {
  document.querySelector("#session-title").value = title;
  document.querySelector("#session-time").value = time;
  document.querySelector("#session-track").value = track;
  const event = new Event("submit", { bubbles: true, cancelable: true });
  document.querySelector("#session-form").dispatchEvent(event);
  return event;
}
test("fields point to a live feedback region", () => {
  const status = document.querySelector("#session-status");
  assert.equal(status.getAttribute("role"), "status");
  for (const id of ["session-title", "session-time"]) {
    const field = document.getElementById(id);
    assert.equal(field.getAttribute("aria-describedby"), status.id);
  }
});
test("blank titles cannot submit", () => withSessions(() => {
  const before = window.workshopSessions.length;
  for (const value of ["", "   "]) {
    document.querySelector("#session-status").textContent = "";
    const event = submitSession(value, "09:45");
    assert.equal(event.defaultPrevented, true, "Prevent navigation");
    assert.equal(window.workshopSessions.length, before);
    assert.equal(document.activeElement, document.querySelector("#session-title"));
    assert.equal(document.querySelector("#session-status").textContent.trim().length > 0, true);
  }
}));
test("missing time cannot submit", () => withSessions(() => {
  const before = window.workshopSessions.length;
  document.querySelector("#session-status").textContent = "";
  submitSession("Fold paper", "");
  assert.equal(window.workshopSessions.length, before);
  assert.equal(document.activeElement, document.querySelector("#session-time"));
  assert.equal(document.querySelector("#session-status").textContent.trim().length > 0, true);
}));
test("valid entries join state and render literal details", () => withSessions(() => {
  const before = window.workshopSessions.length;
  submitSession("  <em>Paper flowers</em>  ", "14:30", "Making");
  assert.equal(window.workshopSessions.length, before + 1);
  const added = window.workshopSessions[before];
  assert.equal(added.title, "<em>Paper flowers</em>");
  assert.equal(added.time, "14:30");
  assert.equal(added.track, "Making");
  const rows = document.querySelectorAll("#sessions li");
  assert.equal(rows.length, before + 1);
  assert.includes(rows[before].textContent, "14:30 — <em>Paper flowers</em> (Making)");
  assert.equal(rows[before].querySelector("em"), null);
  renderSessions();
  assert.equal(document.querySelectorAll("#sessions li").length, before + 1, "The addition survives another render");
}));
test("success resets the form", () => withSessions(() => {
  submitSession("Paper folding", "15:00", "Making");
  assert.equal(document.querySelector("#session-title").value, "");
  assert.equal(document.querySelector("#session-time").value, "");
  assert.equal(document.querySelector("#session-track").value, "Art");
}));
test("success announces the added title", () => withSessions(() => {
  document.querySelector("#session-status").textContent = "";
  submitSession("Paper folding", "15:00");
  assert.includes(document.querySelector("#session-status").textContent, "Paper folding");
}));
test("success returns focus to the title field", () => withSessions(() => {
  document.querySelector("#session-form button").focus();
  submitSession("Paper folding", "15:00");
  assert.equal(document.activeElement, document.querySelector("#session-title"));
}));
