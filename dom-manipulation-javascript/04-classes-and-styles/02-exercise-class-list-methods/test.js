test("Favourite click adds active without removing note", () => {
  const card = document.querySelector("#book-card");
  document.querySelector("#favourite").click();
  assert.equal(card.classList.contains("active"), true, "Add the active class");
  assert.equal(card.classList.contains("note"), true, "Keep the note class");
});
test("Favourite click reports the selected state", () => {
  const card = document.querySelector("#book-card");
  card.classList.remove("active");
  document.querySelector("#favourite-status").textContent = "Favourite: no";
  document.querySelector("#favourite").click();
  assert.equal(document.querySelector("#favourite-status").textContent.trim(), "Favourite: yes", "Report the selected state");
});
test("Remove click clears only active", () => {
  const card = document.querySelector("#book-card");
  card.classList.add("active");
  document.querySelector("#unfavourite").click();
  assert.equal(card.classList.contains("active"), false, "Remove the active class");
  assert.equal(card.classList.contains("note"), true, "Keep the note class");
});
test("Remove click reports the cleared state", () => {
  const card = document.querySelector("#book-card");
  card.classList.add("active");
  document.querySelector("#favourite-status").textContent = "Favourite: yes";
  document.querySelector("#unfavourite").click();
  assert.equal(document.querySelector("#favourite-status").textContent.trim(), "Favourite: no", "Report the cleared state");
});
