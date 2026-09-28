test("static member cards and labelled detail panel are present", () => {
  const cards = document.querySelectorAll("#members li");
  assert.equal(cards.length, 3, "Start with three member cards");
  const leah = [...cards].find((card) => card.dataset.name === "Leah Chen");
  assert.exists(leah, "Add Leah Chen's card");
  assert.equal(leah.dataset.skill, "Bread baking", "Give Leah the correct skill");
  assert.equal(leah.querySelector("h3").textContent, "Leah Chen", "Show Leah's name");
  assert.equal(leah.querySelector("p").textContent, "Bread baking", "Show Leah's skill");
  cards.forEach((card) => {
    assert.equal(Boolean(card.dataset.name && card.dataset.skill), true, "Keep name and skill data on each card");
    assert.exists(card.querySelector("button.select"), "Give every card a View button");
  });
  assert.exists(document.querySelector("[aria-labelledby='detail-heading']"), "Keep a labelled detail section");
});
test("View button updates details from its own card", () => {
  const card = document.querySelectorAll("#members li")[1];
  card.querySelector("button.select").click();
  assert.equal(document.querySelector("#detail-name").textContent, card.dataset.name, "Show the chosen name");
  assert.equal(document.querySelector("#detail-skill").textContent, card.dataset.skill, "Show the chosen skill");
});
test("changing selection highlights only the chosen card", () => {
  const cards = document.querySelectorAll("#members li");
  cards[0].querySelector("button.select").click();
  cards[1].querySelector("button.select").click();
  assert.equal(cards[0].classList.contains("selected"), false, "Remove the previous selection");
  assert.equal(cards[1].classList.contains("selected"), true, "Mark the newly selected card");
  assert.equal(document.querySelectorAll("#members li.selected").length, 1, "Select exactly one card");
});
