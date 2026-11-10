test("volunteer quote stays inside the first paragraph", () => {
  const p = document.querySelector("body > p");
  const quote = p?.querySelector("q");
  assert.exists(quote, "Place a <q> inside the existing volunteer paragraph");
  assert.notEqual(quote.textContent.trim(), "", "Write the quoted words");
});
test("return note is a standalone quotation with a paragraph", () => {
  const block = document.querySelector("body > blockquote");
  assert.exists(block, "Add a separate <blockquote> below the opening paragraph");
  assert.exists(block.querySelector(":scope > p")?.textContent.trim(), "Write the return advice in a <p> inside the quotation");
});
test("FAQ has an expanded abbreviation", () => {
  const abbr = document.querySelector("body > p abbr");
  assert.exists(abbr, "Put <abbr> inside a paragraph");
  assert.equal(abbr.textContent.trim().toUpperCase(), "FAQ", "Mark the letters FAQ");
  assert.equal(abbr.getAttribute("title"), "Frequently asked questions", "Spell out FAQ in its title");
});
test("command is marked as code in a paragraph", () => {
  const code = document.querySelector("body > p code");
  assert.exists(code, "Put a <code> element inside a paragraph");
  assert.notEqual(code.textContent.trim(), "", "Write a short command inside <code>");
});
