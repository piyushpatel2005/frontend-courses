function withWorkshop(check) {
  const saved = window.workshopSessions.map(session => ({ ...session }));
  const query = document.querySelector("#session-query");
  const oldQuery = query.value;
  try { query.value = ""; renderSessions(); check(); }
  finally {
    window.workshopSessions.splice(0, window.workshopSessions.length, ...saved);
    query.value = oldQuery;
    renderSessions();
  }
}
function searchWorkshop(value) {
  const query = document.querySelector("#session-query");
  query.value = value;
  query.dispatchEvent(new Event("input", { bubbles: true }));
}
function removeControl(row) {
  // A supplied fixture makes removal independent of the button-building task.
  let button = row.querySelector("button.remove-session");
  if (!button) {
    button = document.createElement("button");
    button.type = "button";
    button.className = "remove-session";
    row.append(button);
  }
  const nested = document.createElement("span");
  nested.textContent = "Remove fixture";
  button.append(nested);
  return nested;
}
test("typing filters titles without deleting state", () => withWorkshop(() => {
  for (const [term, expected] of [["  REPAIR  ", 1], ["09:00", 0], ["Making", 0], ["Remove", 0], ["absent", 0], ["   ", 2]]) {
    searchWorkshop(term);
    const rows = [...document.querySelectorAll("#sessions li")];
    assert.equal(rows.length, 2, "Hide rows rather than deleting them");
    assert.equal(rows.filter(row => !row.hidden).length, expected, "Search only normalized titles");
    assert.equal(window.workshopSessions.length, 2);
  }
}));
test("every current and future row has a named native Remove button", () => withWorkshop(() => {
  window.workshopSessions.push({ title: "<em>New weaving</em>", time: "15:00", track: "Art" });
  renderSessions();
  [...document.querySelectorAll("#sessions li")].forEach((row, index) => {
    const button = row.querySelector("button.remove-session");
    assert.exists(button, "Give each row a Remove button");
    assert.equal(button.type, "button");
    const name = button.getAttribute("aria-label") || button.textContent;
    assert.includes(name, "Remove");
    assert.includes(name, window.workshopSessions[index].title);
    assert.equal(button.querySelector("em"), null, "Keep button labels literal too");
  });
}));
test("delegated nested clicks remove the matching stored session", () => withWorkshop(() => {
  window.workshopSessions.push({ title: "Repair café", time: "16:00", track: "Art" });
  renderSessions();
  searchWorkshop("repair");
  let rows = [...document.querySelectorAll("#sessions li")];
  removeControl(rows[2]).click();
  assert.equal(window.workshopSessions.length, 2, "Delete the matching object from state");
  assert.equal(window.workshopSessions[1].time, "11:00", "Keep the other session with the same title");
  searchWorkshop("");
  rows = [...document.querySelectorAll("#sessions li")];
  removeControl(rows[0]).click();
  assert.equal(window.workshopSessions.length, 1);
  assert.equal(document.querySelectorAll("#sessions li").length, 1);
  renderSessions();
  assert.equal(document.querySelectorAll("#sessions li").length, 1, "Removal survives another render");
}));
test("Update handles an empty itinerary", () => withWorkshop(() => {
  window.workshopSessions.splice(0);
  renderSessions();
  document.querySelector("#session-status").textContent = "";
  document.querySelector("#update-session").click();
  assert.equal(document.querySelector("#session-status").textContent, "No sessions to update.");
}));
test("count is a polite live region", () => {
  const count = document.querySelector("#session-count");
  assert.equal(count.getAttribute("role"), "status");
  assert.equal(count.getAttribute("aria-live"), "polite");
});
test("status counts visible rows on every render and query", () => withWorkshop(() => {
  const count = document.querySelector("#session-count");
  assert.match(count.textContent, /^2\b/, "Count on load");
  searchWorkshop("repair");
  assert.match(count.textContent, /^1\b/);
  window.workshopSessions.push({ title: "Repair instruments", time: "16:00", track: "Making" });
  renderSessions();
  assert.match(count.textContent, /^2\b/, "Refresh after an addition with a filter active");
  window.workshopSessions.splice(1, 2);
  renderSessions();
  assert.match(count.textContent, /^0\b/, "Refresh after removing the last matches");
  searchWorkshop("");
  assert.match(count.textContent, /^1\b/);
}));
test("removal announces the title", () => withWorkshop(() => {
  const row = document.querySelector("#sessions li");
  const title = window.workshopSessions[0].title;
  const nested = removeControl(row);
  nested.closest("button").focus();
  document.querySelector("#session-status").textContent = "";
  nested.click();
  assert.includes(document.querySelector("#session-status").textContent, title);
}));
test("removal restores keyboard focus", () => withWorkshop(() => {
  const nested = removeControl(document.querySelector("#sessions li"));
  nested.closest("button").focus();
  nested.click();
  assert.equal(document.activeElement, document.querySelector("#session-query"));
}));
