test("form fields have associated live feedback", () => {
  const status = document.querySelector("#session-status");
  assert.exists(status, "Keep the feedback paragraph");
  assert.equal(status.getAttribute("role"), "status", "Make feedback a status region");
  for (const id of ["session-title", "session-time"]) {
    const field = document.getElementById(id);
    assert.equal(field.labels.length > 0, true, `Label ${id}`);
    assert.equal(field.getAttribute("aria-describedby"), status.id, `Link ${id} to feedback`);
  }
});
test("invalid entries cannot add a session or navigate", () => {
  const form = document.querySelector("#session-form");
  const title = document.querySelector("#session-title");
  const time = document.querySelector("#session-time");
  const before = document.querySelectorAll("#sessions li").length;
  title.value = "   "; time.value = "09:45";
  const event = new Event("submit", { bubbles: true, cancelable: true });
  form.dispatchEvent(event);
  assert.equal(event.defaultPrevented, true, "Prevent form navigation");
  assert.equal(document.querySelectorAll("#sessions li").length, before, "Do not add a blank title");
  assert.equal(document.activeElement, title, "Focus the missing title");
  title.value = "Fold paper"; time.value = "";
  form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  assert.equal(document.querySelectorAll("#sessions li").length, before, "Do not add a missing time");
  assert.equal(document.activeElement, time, "Focus the missing time");
  assert.equal(document.querySelector("#session-status").textContent.trim().length > 0, true, "Explain what is missing");
});
test("valid submission adds safe text and resets the form", () => {
  const form = document.querySelector("#session-form");
  document.querySelector("#session-title").value = "<em>Paper flowers</em>";
  document.querySelector("#session-time").value = "14:30";
  document.querySelector("#session-track").value = "Art";
  form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  const rows = document.querySelectorAll("#sessions li");
  assert.equal(rows.length, 3, "Add a third session");
  assert.equal(rows[2].textContent.includes("14:30") && rows[2].textContent.includes("Art") && rows[2].textContent.includes("<em>Paper flowers</em>"), true, "Render all new details literally");
  assert.equal(rows[2].querySelector("em"), null, "Do not parse a title as HTML");
  assert.equal(document.querySelector("#session-title").value, "", "Reset after success");
  assert.equal(document.querySelector("#session-status").textContent.includes("Added"), true, "Announce success");
});
