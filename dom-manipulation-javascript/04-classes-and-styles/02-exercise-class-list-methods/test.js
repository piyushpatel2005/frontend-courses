test("Favourite button marks the card and reports yes", () => {
  const card = document.querySelector("#book-card");
  const status = document.querySelector("#favourite-status");
  assert.exists(card, "Keep #book-card");
  assert.exists(status, "Keep #favourite-status");
  document.querySelector("#favourite").click();
  assert.equal(card.classList.contains("active"), true, "Add the active class");
  assert.equal(card.classList.contains("note"), true, "Keep the existing note class");
  assert.equal(status.textContent.trim(), "Favourite: yes", "Show the selected state");
});
test("Remove favourite clears only active and reports no", () => {
  const card = document.querySelector("#book-card");
  const status = document.querySelector("#favourite-status");
  assert.exists(card, "Keep #book-card");
  assert.exists(status, "Keep #favourite-status");
  card.classList.remove("active");
  document.querySelector("#favourite").click();
  assert.equal(card.classList.contains("active"), true, "Mark the card before testing removal");
  document.querySelector("#unfavourite").click();
  assert.equal(card.classList.contains("active"), false, "Remove the active class");
  assert.equal(card.classList.contains("note"), true, "Keep the note class");
  assert.equal(status.textContent.trim(), "Favourite: no", "Show the cleared state");
});
