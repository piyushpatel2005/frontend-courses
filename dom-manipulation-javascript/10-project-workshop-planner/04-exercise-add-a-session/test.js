test("fields point to a live feedback region", () => {
  const status = document.querySelector("#session-status");
  assert.equal(status?.getAttribute("role"), "status");
  for (const id of ["session-title", "session-time"]) {
    const field = document.getElementById(id);
    assert.equal(field.labels.length > 0, true, `Label ${id}`);
    assert.equal(field.getAttribute("aria-describedby"), status.id);
  }
});
test("blank titles cannot submit", () => {
  const title = document.querySelector("#session-title");
  title.value = "   "; document.querySelector("#session-time").value = "09:45";
  const before = document.querySelectorAll("#sessions li").length;
  const event = new Event("submit", { bubbles: true, cancelable: true });
  document.querySelector("#session-form").dispatchEvent(event);
  assert.equal(event.defaultPrevented, true, "Prevent navigation");
  assert.equal(document.querySelectorAll("#sessions li").length, before);
  assert.equal(document.activeElement, title);
  assert.equal(document.querySelector("#session-status").textContent.trim().length > 0, true);
});
test("missing time cannot submit", () => {
  const time = document.querySelector("#session-time");
  document.querySelector("#session-title").value = "Fold paper"; time.value = "";
  const before = document.querySelectorAll("#sessions li").length;
  document.querySelector("#session-form").dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  assert.equal(document.querySelectorAll("#sessions li").length, before);
  assert.equal(document.activeElement, time);
  assert.equal(document.querySelector("#session-status").textContent.trim().length > 0, true);
});
test("valid entries render safe session details", () => {
  document.querySelector("#session-title").value = "<em>Paper flowers</em>";
  document.querySelector("#session-time").value = "14:30";
  document.querySelector("#session-track").value = "Art";
  const before = document.querySelectorAll("#sessions li").length;
  document.querySelector("#session-form").dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  const rows = document.querySelectorAll("#sessions li");
  assert.equal(rows.length, before + 1);
  assert.equal(rows[rows.length - 1].textContent.includes("14:30 — <em>Paper flowers</em> (Art)"), true);
  assert.equal(rows[rows.length - 1].querySelector("em"), null);
});
test("successful addition resets and announces", () => {
  document.querySelector("#session-title").value = "Paper folding";
  document.querySelector("#session-time").value = "15:00";
  document.querySelector("#session-form").dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  assert.equal(document.querySelector("#session-title").value, "");
  assert.equal(document.querySelector("#session-status").textContent.includes("Added"), true);
});
