test("event steps resume at number four", () => {
  const list = document.querySelectorAll("body > ol")[0];
  assert.exists(list, "Add a numbered <ol>");
  assert.equal(list.getAttribute("start"), "4", "Set start to the integer 4");
  assert.equal(Array.from(list.children).filter(el => el.tagName === "LI" && el.textContent.trim()).length, 2, "Add two non-empty event steps");
});
test("activity labels resume at uppercase C", () => {
  const list = document.querySelectorAll("body > ol")[1];
  assert.exists(list, "Add a second <ol>");
  assert.equal(list.getAttribute("type"), "A", 'Use type="A" for uppercase letters');
  assert.equal(list.getAttribute("start"), "3", 'Use start="3" to begin at C');
  assert.equal(Array.from(list.children).filter(el => el.tagName === "LI" && el.textContent.trim()).length, 2, "Add two non-empty activity labels");
});
