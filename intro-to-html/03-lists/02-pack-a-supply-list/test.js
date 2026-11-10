test("supplies form one bulleted list", () => {
  const list = document.querySelector("body > ul");
  assert.exists(list, "Add a <ul> beneath the paragraph");
  const items = Array.from(list.children);
  assert.equal(items.length, 3, "Add three supply items");
  assert.equal(items.every(item => item.tagName === "LI" && item.textContent.trim()), true, "Use non-empty <li> elements");
});
