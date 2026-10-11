test("The helper prepares a detached, text-only book", () => {
  const list = document.querySelector("#books");
  const saved = [...list.childNodes];
  try {
    for (const title of ["The Hobbit", "<em>River & Reed</em>"]) {
      const book = window.makeBook(title);
      assert.equal(book?.tagName, "LI", "Return an li from makeBook");
      assert.equal(book.parentNode, null, "Return the book before inserting it");
      assert.equal(book.textContent, title, "Use the supplied title as literal text");
      assert.equal(book.children.length, 0, "Do not parse titles as HTML");
    }
  } finally { list.replaceChildren(...saved); }
});
test("The prepared Hobbit appears after the original", () => {
  const items = document.querySelectorAll("#books > li");
  assert.equal(items.length, 2, "Append exactly one new book to #books");
  assert.equal(items[0].textContent, "The Secret Garden");
  assert.equal(items[1].textContent, "The Hobbit");
  assert.equal(items[1].children.length, 0);
});
