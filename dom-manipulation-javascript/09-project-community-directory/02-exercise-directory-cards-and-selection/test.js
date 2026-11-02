// Native focus/layout checks need a rendered document, not only parsed markup.
async function withPreviewLayout(check) {
  await new Promise(resolve => requestAnimationFrame(resolve));
  return await check();
}
test("static member cards and labelled detail panel are present", () => withPreviewLayout(() => {
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
  assert.equal(leah.querySelector("button.select").type, "button", "Use a native non-submit View button");
}));
test("View button copies its own card data as literal text", () => withPreviewLayout(() => {
  const card = document.querySelectorAll("#members li")[1];
  const savedName = card.dataset.name;
  const savedSkill = card.dataset.skill;
  const nested = document.createElement("strong");
  nested.textContent = "View fixture";
  card.querySelector("button.select").append(nested);
  try {
    card.dataset.name = "<em>Omar Reed</em>";
    card.dataset.skill = "<b>Bike repair</b>";
    nested.click();
    assert.equal(document.querySelector("#detail-name").textContent, card.dataset.name);
    assert.equal(document.querySelector("#detail-skill").textContent, card.dataset.skill);
    assert.equal(document.querySelector("#detail-name em, #detail-skill b"), null, "Copy data as text, not markup");
  } finally {
    card.dataset.name = savedName;
    card.dataset.skill = savedSkill;
    nested.remove();
    document.querySelector("#detail-name").textContent = "Choose a member";
    document.querySelector("#detail-skill").textContent = "Their skill will appear here.";
  }
}));
test("changing selection highlights only the chosen card", () => withPreviewLayout(() => {
  const cards = document.querySelectorAll("#members li");
  cards[0].querySelector("button.select").click();
  cards[1].querySelector("button.select").click();
  assert.equal(cards[0].classList.contains("selected"), false, "Remove the previous selection");
  assert.equal(cards[1].classList.contains("selected"), true, "Mark the newly selected card");
  assert.equal(document.querySelectorAll("#members li.selected").length, 1, "Select exactly one card");
}));
