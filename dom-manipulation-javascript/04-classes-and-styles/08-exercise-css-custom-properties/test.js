test("Card starts with the stylesheet's teal accent", () => {
  const card = document.querySelector("#workshop-card");
  const tag = document.querySelector("#workshop-card .tag");
  const status = document.querySelector("#theme-status");
  assert.exists(card, "Keep #workshop-card");
  assert.exists(tag, "Keep the card tag");
  assert.exists(status, "Keep #theme-status");
  assert.equal(card.style.getPropertyValue("--accent"), "", "Start without an inline override");
  assert.equal(getComputedStyle(card).borderTopColor, "rgb(22, 112, 105)", "Keep the CSS teal default on the border");
  assert.equal(getComputedStyle(tag).backgroundColor, "rgb(22, 112, 105)", "Use the same accent on the tag");
  assert.equal(status.textContent.trim(), "Teal accent selected.", "Show the initial state");
});

test("Plum button changes the shared accent", () => {
  const card = document.querySelector("#workshop-card");
  const tag = document.querySelector("#workshop-card .tag");
  const status = document.querySelector("#theme-status");
  card.style.removeProperty("--accent");
  document.querySelector("#plum-accent").click();
  assert.equal(card.style.getPropertyValue("--accent"), "#713e83", "Set the --accent custom property inline");
  assert.equal(getComputedStyle(card).borderTopColor, "rgb(113, 62, 131)", "Apply plum to the border");
  assert.equal(getComputedStyle(tag).backgroundColor, "rgb(113, 62, 131)", "Apply plum to the tag");
  assert.equal(status.textContent.trim(), "Plum accent selected.", "Announce plum");
});

test("Reset button restores the stylesheet accent", () => {
  const card = document.querySelector("#workshop-card");
  const tag = document.querySelector("#workshop-card .tag");
  const status = document.querySelector("#theme-status");
  card.style.removeProperty("--accent");
  document.querySelector("#plum-accent").click();
  assert.equal(card.style.getPropertyValue("--accent"), "#713e83", "Select plum before resetting");
  document.querySelector("#reset-accent").click();
  assert.equal(card.style.getPropertyValue("--accent"), "", "Remove the inline custom property");
  assert.equal(getComputedStyle(card).borderTopColor, "rgb(22, 112, 105)", "Restore the teal border");
  assert.equal(getComputedStyle(tag).backgroundColor, "rgb(22, 112, 105)", "Restore the teal tag");
  assert.equal(status.textContent.trim(), "Teal accent restored.", "Announce the restored state");
});
