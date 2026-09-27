test("typing filters without deleting state", () => {
  const query = document.querySelector("#session-query");
  query.value = "REPAIR"; query.dispatchEvent(new Event("input", { bubbles: true }));
  const rows = [...document.querySelectorAll("#sessions li")];
  assert.equal(rows.length, 2);
  assert.equal(rows.filter(row => !row.hidden).length, 1);
  query.value = "not here"; query.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal([...document.querySelectorAll("#sessions li")].filter(row => !row.hidden).length, 0);
  query.value = ""; query.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal([...document.querySelectorAll("#sessions li")].filter(row => !row.hidden).length, 2);
});
test("every row has a descriptive native Remove button", () => {
  const check = row => {
    const button = row.querySelector("button.remove-session");
    assert.exists(button);
    assert.equal(button.type, "button");
    assert.equal(button.textContent.includes("Remove"), true);
    assert.equal(button.textContent.includes(row.firstChild.textContent.split(" — ")[1].split(" (")[0]), true);
  };
  [...document.querySelectorAll("#sessions li")].forEach(check);
  document.querySelector("#session-title").value = "New weaving";
  document.querySelector("#session-time").value = "15:00";
  document.querySelector("#session-form").dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  check([...document.querySelectorAll("#sessions li")].at(-1));
});
test("delegated clicks remove new and original sessions", () => {
  const list = document.querySelector("#sessions");
  document.querySelector("#session-title").value = "Late weaving";
  document.querySelector("#session-time").value = "16:00";
  document.querySelector("#session-form").dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  const before = list.querySelectorAll("li").length;
  const added = [...list.querySelectorAll("li")].find(row => row.textContent.includes("Late weaving"));
  assert.exists(added?.querySelector("button.remove-session"));
  added.querySelector("button.remove-session").click();
  assert.equal(list.querySelectorAll("li").length, before - 1);
  assert.equal(list.textContent.includes("Late weaving"), false);
  list.querySelector("li button.remove-session").click();
  assert.equal(list.textContent.includes("Screen printing"), false);
});
test("Update handles an empty itinerary", () => {
  const list = document.querySelector("#sessions");
  while (list.querySelector("li button.remove-session")) list.querySelector("li button.remove-session").click();
  document.querySelector("#update-session").click();
  assert.equal(document.querySelector("#session-status").textContent, "No sessions to update.");
});
test("polite status counts visible rows after changes", () => {
  const count = document.querySelector("#session-count");
  assert.equal(count.getAttribute("role"), "status");
  assert.equal(count.getAttribute("aria-live"), "polite");
  const query = document.querySelector("#session-query");
  query.value = ""; query.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal(count.textContent.includes(String(document.querySelectorAll("#sessions li").length)), true);
  query.value = "absent"; query.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal(count.textContent.includes("0"), true);
  query.value = ""; query.dispatchEvent(new Event("input", { bubbles: true }));
  document.querySelector("#session-title").value = "Late mosaic";
  document.querySelector("#session-time").value = "16:00";
  document.querySelector("#session-form").dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  const added = document.querySelectorAll("#sessions li").length;
  assert.equal(count.textContent.includes(String(added)), true);
  document.querySelector("#sessions li:last-child button.remove-session").click();
  assert.equal(count.textContent.includes(String(added - 1)), true);
});
