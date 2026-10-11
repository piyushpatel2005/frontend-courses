function submitMember(name, skill) {
  document.querySelector("#new-name").value = name;
  document.querySelector("#new-skill").value = skill;
  const event = new Event("submit", { bubbles: true, cancelable: true });
  document.querySelector("#member-form").dispatchEvent(event);
  return event;
}
function withMembers(check) {
  const list = document.querySelector("#members");
  const original = [...list.children];
  const search = document.querySelector("#member-search");
  const oldQuery = search.value;
  const details = [document.querySelector("#detail-name"), document.querySelector("#detail-skill")];
  const text = details.map(field => field.textContent);
  try { search.value = ""; filterMembers(); check(list); }
  finally {
    list.replaceChildren(...original);
    search.value = oldQuery;
    filterMembers();
    details.forEach((field, index) => field.textContent = text[index]);
  }
}
function memberFixture(list) {
  const card = document.createElement("li");
  card.dataset.name = "Zuri Moss";
  card.dataset.skill = "Weaving";
  card.innerHTML = '<h3>Zuri Moss</h3><p>Weaving</p><button class="select" type="button">View Zuri Moss</button><button class="remove" type="button"><strong>Remove Zuri Moss</strong></button>';
  list.append(card);
  return card;
}
test("submit prevents navigation", () => {
  assert.equal(submitMember("", "").defaultPrevented, true, "Prevent form navigation");
});
test("blank fields are rejected with new feedback", () => withMembers(list => {
  const before = list.children.length;
  for (const [name, skill] of [["   ", "Painting"], ["Ada", "   "], ["", ""]]) {
    document.querySelector("#form-status").textContent = "";
    submitMember(name, skill);
    assert.equal(list.children.length, before);
    assert.equal(document.querySelector("#form-status").textContent.trim().length > 0, true);
  }
}));
test("builder returns a detached literal-text card and named actions", () => {
  for (const [name, skill] of [["<em>Ada</em>", "<b>Painting</b>"], ["Niko", "Mending"]]) {
    const card = createMemberCard(name, skill);
    assert.exists(card, "Return a prepared card");
    assert.equal(card.tagName, "LI");
    assert.equal(card.isConnected, false);
    assert.equal(card.dataset.name, name);
    assert.equal(card.dataset.skill, skill);
    assert.equal(card.querySelector("h3").textContent, name);
    assert.equal(card.querySelector("p").textContent, skill);
    assert.equal(card.querySelector("em, b"), null);
    for (const action of ["select", "remove"]) {
      const button = card.querySelector(`button.${action}`);
      assert.exists(button);
      assert.equal(button.type, "button");
      assert.includes(button.getAttribute("aria-label") || button.textContent, name);
    }
  }
});
test("valid submit appends trimmed cards including duplicate names", () => withMembers(list => {
  const before = list.children.length;
  submitMember("  <em>Ada</em>  ", "  Painting  ");
  submitMember("<em>Ada</em>", "Mending");
  assert.equal(list.children.length, before + 2, "Each valid submission gets its own card");
  const cards = [...list.children].slice(-2);
  assert.equal(cards[0].dataset.name, "<em>Ada</em>");
  assert.equal(cards[0].dataset.skill, "Painting");
  assert.equal(cards[0].querySelector("em"), null);
  cards[1].querySelector("button.select").click();
  assert.equal(document.querySelector("#detail-skill").textContent, "Mending", "Keep the supplied selection working for new cards");
}));
test("addition reapplies search visibility and feedback", () => withMembers(list => {
  const search = document.querySelector("#member-search");
  search.value = "weaving";
  filterMembers();
  submitMember("Niko Vale", "Mending");
  assert.equal(list.lastElementChild.hidden, true, "Hide a new nonmatch");
  submitMember("Zuri Moss", "Weaving");
  assert.equal(list.lastElementChild.hidden, false);
  assert.match(document.querySelector("#result-count").textContent, /^1\b/);
  assert.equal(document.querySelector("#empty-state").hidden, true);
}));
test("addition is announced", () => withMembers(() => {
  document.querySelector("#form-status").textContent = "";
  submitMember("Niko Vale", "Mending");
  assert.includes(document.querySelector("#form-status").textContent, "Niko Vale");
}));
test("delegation removes original and future cards from nested clicks", () => withMembers(list => {
  const original = list.firstElementChild;
  const later = memberFixture(list);
  later.querySelector("strong").click();
  assert.equal(later.isConnected, false);
  original.querySelector("button.remove").click();
  assert.equal(original.isConnected, false);
}));
test("removal is announced", () => withMembers(list => {
  const card = memberFixture(list);
  document.querySelector("#form-status").textContent = "";
  card.querySelector("strong").click();
  assert.includes(document.querySelector("#form-status").textContent, "Zuri Moss");
}));
test("removal clears only stale selected details", () => withMembers(list => {
  const selected = list.firstElementChild;
  selected.querySelector("button.select").click();
  const other = memberFixture(list);
  other.querySelector("strong").click();
  assert.equal(document.querySelector("#detail-name").textContent, selected.dataset.name, "Keep another member's selected details");
  selected.querySelector("button.remove").click();
  assert.equal(document.querySelector("#detail-name").textContent, "Choose a member");
  assert.equal(document.querySelector("#detail-skill").textContent, "Their skill will appear here.");
}));
test("removing the last match refreshes search feedback", () => withMembers(list => {
  const card = memberFixture(list);
  document.querySelector("#member-search").value = "weaving";
  filterMembers();
  card.querySelector("strong").click();
  assert.equal(document.querySelector("#empty-state").hidden, false);
  assert.match(document.querySelector("#result-count").textContent, /^0\b/);
}));
test("removal restores keyboard focus to search", () => withMembers(list => {
  const card = memberFixture(list);
  card.querySelector("button.remove").focus();
  card.querySelector("strong").click();
  assert.equal(document.activeElement, document.querySelector("#member-search"));
}));
