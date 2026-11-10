test("glossary contains two term-description pairs", () => {
  const list = document.querySelector("body > dl");
  assert.exists(list, "Add a <dl> glossary");
  const parts = Array.from(list.children);
  assert.equal(parts.length, 4, "Write two terms and two descriptions");
  assert.equal(parts.every((part, i) => part.tagName === (i % 2 ? "DD" : "DT") && part.textContent.trim()), true, "Alternate non-empty <dt> and <dd> elements");
});
