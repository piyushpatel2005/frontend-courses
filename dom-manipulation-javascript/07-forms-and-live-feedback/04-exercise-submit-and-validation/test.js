test("submission stays on the page", () => {
  const form = document.querySelector("#request");
  const book = document.querySelector("#book");
  for (const value of ["   ", "River Atlas"]) {
    book.value = value;
    const event = new Event("submit", { bubbles: true, cancelable: true });
    form.dispatchEvent(event);
    assert.equal(event.defaultPrevented, true, "Prevent navigation on every submission");
  }
});
test("blank title exposes a focused error", () => {
  const book = document.querySelector("#book");
  book.value = "   ";
  document.querySelector("#request").dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  assert.equal(book.getAttribute("aria-invalid"), "true", "Mark an invalid field");
  assert.equal(document.activeElement, book, "Focus the field to help correction");
  assert.equal(document.querySelector("#request-status").textContent.includes("Enter a book title"), true, "Explain what is missing");
});
test("valid title clears error and confirms the request", () => {
  const form = document.querySelector("#request");
  const book = document.querySelector("#book");
  book.setAttribute("aria-invalid", "true"); // Set up the error independently.
  book.value = "  River Atlas  ";
  form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  assert.notEqual(book.getAttribute("aria-invalid"), "true", "Remove invalid state after correction");
  assert.equal(document.querySelector("#request-status").textContent.includes("River Atlas"), true, "Confirm the requested title");
});
