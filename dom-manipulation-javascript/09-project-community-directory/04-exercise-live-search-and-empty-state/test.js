test("count is a polite live status", () => {
  const count = document.querySelector("#result-count");
  assert.equal(count.getAttribute("role"), "status", "Announce the result count");
  assert.equal(count.getAttribute("aria-live"), "polite", "Use polite announcements");
});
test("input filters names and skills without deleting cards", () => {
  const search = document.querySelector("#member-search");
  const cards = [...document.querySelectorAll("#members li")];
  search.value = "  BIKE  ";
  search.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal(cards.length, 3, "Keep the source cards");
  assert.equal(cards.filter((card) => !card.hidden).map((card) => card.dataset.name).join(), "Omar Reed", "Match skills regardless of case or spaces");
  search.value = "mina";
  search.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal(cards.filter((card) => !card.hidden).map((card) => card.dataset.name).join(), "Mina Park", "Match names");
  search.value = "";
  search.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal(cards.every((card) => !card.hidden), true, "Clearing restores all cards");
});
test("result count follows the visible cards", () => {
  const search = document.querySelector("#member-search");
  const count = document.querySelector("#result-count");
  search.value = "nothing matches";
  search.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal(count.textContent.includes("0"), true, "Report zero matches");
  search.value = "bike";
  search.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal(count.textContent.includes("1"), true, "Report one matching member");
});
test("empty state tracks zero results and recovery", () => {
  const search = document.querySelector("#member-search");
  const empty = document.querySelector("#empty-state");
  search.value = "nothing matches";
  search.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal(empty.hidden, false, "Reveal the empty state");
  search.value = "";
  search.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal(empty.hidden, true, "Hide the empty state when results return");
});
test("hidden selected card clears the selection and details", () => {
  const selected = document.querySelector("#members li");
  const search = document.querySelector("#member-search");
  selected.classList.add("selected");
  document.querySelector("#detail-name").textContent = selected.dataset.name;
  document.querySelector("#detail-skill").textContent = selected.dataset.skill;
  search.value = "bike";
  search.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal(selected.hidden, true, "Hide the nonmatching selected card");
  assert.equal(selected.classList.contains("selected"), false, "Clear the hidden selection");
  assert.equal(document.querySelector("#detail-name").textContent, "Choose a member", "Clear the detail name");
  assert.equal(document.querySelector("#detail-skill").textContent, "Their skill will appear here.", "Clear the detail skill");
});
