test("The helper makes one detached deep clone with its own title", () => {
  const original = document.querySelector("#exhibits > .exhibit");
  const copy = makeExhibit("Woven basket");
  assert.exists(copy, "Return the new exhibit card");
  assert.equal(copy === original, false, "Clone instead of renaming the sample");
  assert.equal(copy.isConnected, false, "Return the copy before inserting it");
  assert.equal(copy.classList.contains("exhibit"), true, "Keep the exhibit class");
  assert.equal(copy.querySelector(".exhibit-name")?.textContent, "Woven basket", "Change the copied title");
  assert.equal(copy.querySelector("span")?.textContent, "Collection item", "Deep-clone the nested note");
  assert.equal(original.querySelector(".exhibit-name")?.textContent, "Clay vessel", "Leave the sample unchanged");
});

test("The fragment inserts both prepared cards after the sample", () => {
  const cards = [...document.querySelectorAll("#exhibits > .exhibit")];
  assert.equal(cards.length, 3, "Append two copies after the sample");
  assert.equal(cards.map(card => card.querySelector(".exhibit-name")?.textContent).join("|"), "Clay vessel|Woven basket|Glass bead", "Keep the requested order");
  for (const card of cards.slice(1)) {
    assert.equal(card.querySelector("span")?.textContent, "Collection item", "Preserve the nested note");
  }
});
