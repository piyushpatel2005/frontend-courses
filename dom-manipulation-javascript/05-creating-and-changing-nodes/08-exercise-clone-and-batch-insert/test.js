test("Two complete exhibit cards have their own names and notes", () => {
  const cards = [...document.querySelectorAll("#exhibits > .exhibit")];
  assert.equal(cards.length, 3, "Keep the original and add two clones");
  assert.equal(cards[1].querySelector(".exhibit-name")?.textContent, "Woven basket", "Name the first clone");
  assert.equal(cards[2].querySelector(".exhibit-name")?.textContent, "Glass bead", "Name the second clone");
  assert.equal(cards[1].querySelectorAll("span").length, 1, "Preserve the first clone's nested note");
  assert.equal(cards[2].querySelectorAll("span").length, 1, "Preserve the second clone's nested note");
  assert.equal(cards[1].querySelector("span")?.textContent, "Collection item", "Keep the sample note");
  assert.equal(cards[2].querySelector("span")?.textContent, "Collection item", "Keep the sample note");
});
test("Batch lands after the unchanged original in order", () => {
  const list = document.querySelector("#exhibits");
  assert.exists(list);
  assert.equal([...list.children].map(node => node.querySelector(".exhibit-name")?.textContent).join("|"), "Clay vessel|Woven basket|Glass bead", "Append the copies after the original in order");
  assert.equal(list.children.length, 3, "Do not add a visible wrapper around the cards");
});
