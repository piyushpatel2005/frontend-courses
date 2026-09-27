test("labelled search and live feedback are present", () => {
  const search = document.querySelector("#member-search");
  assert.exists(search, "Keep the search field");
  assert.equal(search.labels.length > 0, true, "Label the search field");
  assert.equal(document.querySelector("#result-count").getAttribute("role"), "status", "Announce the result count");
  assert.equal(document.querySelector("#result-count").getAttribute("aria-live"), "polite", "Use a polite live region");
  assert.exists(document.querySelector("#empty-state"), "Keep the empty-state paragraph");
});
test("input filters names or skills without deleting cards", () => {
  const search = document.querySelector("#member-search");
  search.value = "  BIKE  ";
  search.dispatchEvent(new Event("input", { bubbles: true }));
  const cards = [...document.querySelectorAll("#members li")];
  assert.equal(cards.length, 3, "Do not remove the source cards");
  assert.equal(cards.filter((card) => !card.hidden).length, 1, "Find a skill regardless of case and spaces");
  assert.equal(cards.find((card) => !card.hidden).dataset.name, "Omar Reed", "Match the bike repair card");
  search.value = "mina";
  search.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal(cards.find((card) => !card.hidden).dataset.name, "Mina Park", "Also match names");
  search.value = "";
  search.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal(cards.every((card) => !card.hidden), true, "Clearing the field restores all cards");
});
test("zero matches show an empty state and accurate live count", () => {
  const search = document.querySelector("#member-search");
  search.value = "nothing matches";
  search.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal(document.querySelectorAll("#members li:not([hidden])").length, 0, "Hide nonmatching cards");
  assert.equal(document.querySelector("#empty-state").hidden, false, "Reveal the empty state");
  assert.equal(document.querySelector("#result-count").textContent.includes("0"), true, "Announce zero results");
  search.value = "";
  search.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal(document.querySelector("#empty-state").hidden, true, "Hide the empty state when results return");
  assert.equal(document.querySelector("#result-count").textContent.includes("3"), true, "Announce the restored count");
});
