test("Names the initial accent", () => {
  assert.equal(document.querySelector("#theme-status").textContent.trim(),
    "Teal accent selected.", "Show the initial status on load");
});
test("Plum changes the shared card accent", () => {
  const card = document.querySelector("#workshop-card");
  const tag = card.querySelector(".tag");
  const previous = card.getAttribute("style");
  try {
    card.style.removeProperty("--accent");
    document.querySelector("#plum-accent").click();
    assert.equal(card.style.getPropertyValue("--accent").trim() !== "", true,
      "Set --accent inline on the card");
    assert.equal(getComputedStyle(card).borderTopColor, "rgb(113, 62, 131)", "Make the border plum");
    assert.equal(getComputedStyle(tag).backgroundColor, "rgb(113, 62, 131)", "Make the tag plum too");
  } finally {
    if (previous === null) card.removeAttribute("style"); else card.setAttribute("style", previous);
  }
});
test("Plum reports the selected accent", () => {
  const status = document.querySelector("#theme-status");
  status.textContent = "Waiting";
  document.querySelector("#plum-accent").click();
  assert.equal(status.textContent.trim(), "Plum accent selected.", "Announce the plum selection");
});
test("Reset removes an override and returns to stylesheet colors", () => {
  const card = document.querySelector("#workshop-card");
  const tag = card.querySelector(".tag");
  const previous = card.getAttribute("style");
  try {
    card.style.setProperty("--accent", "#aa5500");
    document.querySelector("#reset-accent").click();
    assert.equal(card.style.getPropertyValue("--accent"), "", "Remove the inline override rather than hardcoding teal");
    assert.equal(getComputedStyle(card).borderTopColor, "rgb(22, 112, 105)", "Restore the stylesheet border color");
    assert.equal(getComputedStyle(tag).backgroundColor, "rgb(22, 112, 105)", "Restore the stylesheet tag color");
  } finally {
    if (previous === null) card.removeAttribute("style"); else card.setAttribute("style", previous);
  }
});
test("Reset reports the restored accent", () => {
  const status = document.querySelector("#theme-status");
  status.textContent = "Waiting";
  document.querySelector("#reset-accent").click();
  assert.equal(status.textContent.trim(), "Teal accent restored.", "Announce the reset");
});
