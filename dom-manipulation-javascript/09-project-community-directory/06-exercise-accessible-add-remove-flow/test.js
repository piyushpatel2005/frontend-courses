test("submit prevents navigation", () => {
  const form = document.querySelector("#member-form");
  document.querySelector("#new-name").value = "";
  document.querySelector("#new-skill").value = "";
  const event = new Event("submit", { bubbles: true, cancelable: true });
  form.dispatchEvent(event);
  assert.equal(event.defaultPrevented, true, "Prevent form navigation");
});
test("blank fields are rejected with feedback", () => {
  const form = document.querySelector("#member-form");
  const name = document.querySelector("#new-name");
  const skill = document.querySelector("#new-skill");
  const status = document.querySelector("#form-status");
  const before = document.querySelectorAll("#members li").length;
  for (const [n, s] of [["   ", "Painting"], ["Ada", "   "]]) {
    name.value = n; skill.value = s;
    status.textContent = "";
    const event = new Event("submit", { bubbles: true, cancelable: true });
    form.dispatchEvent(event);
    assert.equal(document.querySelectorAll("#members li").length, before, "Reject missing fields");
    assert.equal(status.textContent.trim().length > 0, true, "Explain the missing field");
  }
});
test("valid submission adds safe text and accessible actions", () => {
  const form = document.querySelector("#member-form");
  document.querySelector("#new-name").value = "  <em>Ada</em>  ";
  document.querySelector("#new-skill").value = "  Painting  ";
  form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  const card = [...document.querySelectorAll("#members li")].find((item) => item.dataset.name === "<em>Ada</em>");
  assert.exists(card, "Add a card with the trimmed name");
  assert.equal(card.dataset.skill, "Painting", "Keep the trimmed skill for details and search");
  assert.equal(card.querySelector("h3").textContent, "<em>Ada</em>", "Show literal typed text");
  assert.equal(card.querySelector("em"), null, "Do not parse submitted markup");
  assert.exists(card.querySelector("button.select"), "Give the new card a View button");
  assert.equal(card.querySelector("button.remove").textContent.includes("Ada"), true, "Name the Remove action");
  card.remove(); // Restore the initial cards for the next check.
});
test("addition is announced in the status", () => {
  const form = document.querySelector("#member-form");
  document.querySelector("#new-name").value = "Niko Vale";
  document.querySelector("#new-skill").value = "Mending";
  const status = document.querySelector("#form-status");
  status.textContent = "";
  form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  assert.equal(status.textContent.includes("Niko Vale") && status.textContent.includes("added"), true, "Announce the new member");
  [...document.querySelectorAll("#members li")].find((card) => card.dataset.name === "Niko Vale")?.remove();
});
test("delegated Remove works on original and later cards", () => {
  const list = document.querySelector("#members");
  const original = list.querySelector("li");
  const later = document.createElement("li");
  later.dataset.name = "Zuri Moss";
  later.innerHTML = '<button type="button" class="remove">Remove Zuri Moss</button>';
  list.append(later);
  try {
    later.querySelector("button.remove").click();
    assert.equal(later.isConnected, false, "Remove cards inserted after page load");
    original.querySelector("button.remove").click();
    assert.equal(original.isConnected, false, "Remove original cards too");
  } finally {
    later.remove();
    if (!original.isConnected) list.prepend(original);
  }
});
test("removal is announced", () => {
  const list = document.querySelector("#members");
  const card = document.createElement("li");
  card.dataset.name = "Zuri Moss";
  card.innerHTML = '<button type="button" class="remove">Remove Zuri Moss</button>';
  list.append(card);
  const status = document.querySelector("#form-status");
  status.textContent = "";
  try {
    card.querySelector("button.remove").click();
    assert.equal(status.textContent.includes("Zuri Moss") && status.textContent.includes("removed"), true, "Announce the removed member");
  } finally { card.remove(); }
});
test("removing a selected card clears its details", () => {
  const list = document.querySelector("#members");
  const card = document.createElement("li");
  card.dataset.name = "Zuri Moss";
  card.className = "selected";
  card.innerHTML = '<button type="button" class="remove">Remove Zuri Moss</button>';
  list.append(card);
  document.querySelector("#detail-name").textContent = "Zuri Moss";
  document.querySelector("#detail-skill").textContent = "Weaving";
  try {
    card.querySelector("button.remove").click();
    assert.equal(document.querySelector("#detail-name").textContent, "Choose a member", "Clear the stale selected name");
    assert.equal(document.querySelector("#detail-skill").textContent, "Their skill will appear here.", "Clear the stale skill");
  } finally { card.remove(); }
});
test("removing the last match refreshes search feedback", () => {
  const list = document.querySelector("#members");
  const card = document.createElement("li");
  card.dataset.name = "Zuri Moss";
  card.dataset.skill = "Weaving";
  card.innerHTML = '<button type="button" class="remove">Remove Zuri Moss</button>';
  list.append(card);
  const search = document.querySelector("#member-search");
  search.value = "weaving";
  search.dispatchEvent(new Event("input", { bubbles: true }));
  try {
    card.querySelector("button.remove").click();
    assert.equal(document.querySelector("#empty-state").hidden, false, "Show empty state when no matches remain");
    assert.equal(document.querySelector("#result-count").textContent.includes("0"), true, "Refresh the result count");
  } finally { card.remove(); search.value = ""; search.dispatchEvent(new Event("input", { bubbles: true })); }
});
