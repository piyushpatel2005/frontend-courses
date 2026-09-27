test("request has a labelled field and associated live status", () => {
  const book = document.querySelector("#book");
  const status = document.querySelector("#request-status");
  assert.exists(document.querySelector("form#request"), "Keep the request form");
  assert.exists(book, "Keep the book title field");
  assert.equal(book.labels.length > 0, true, "Connect a label to the field");
  assert.exists(status, "Provide a status paragraph");
  assert.equal(book.getAttribute("aria-describedby"), status.id, "Associate the status with the field");
  assert.equal(status.getAttribute("role"), "status", "Use a status role for announcements");
});
test("blank submit stays in place and exposes a focused error", () => {
  const form = document.querySelector("#request");
  const book = document.querySelector("#book");
  book.value = "   ";
  const event = new Event("submit", { bubbles: true, cancelable: true });
  form.dispatchEvent(event);
  assert.equal(event.defaultPrevented, true, "Prevent the form's default navigation");
  assert.equal(book.getAttribute("aria-invalid"), "true", "Mark an invalid field");
  assert.equal(document.activeElement, book, "Focus the field to help correction");
  assert.equal(document.querySelector("#request-status").textContent.trim().length > 0, true, "Explain what is missing");
});
test("valid submit confirms the entered title and clears error state", () => {
  const form = document.querySelector("#request");
  const book = document.querySelector("#book");
  book.value = "  River Atlas  ";
  const event = new Event("submit", { bubbles: true, cancelable: true });
  form.dispatchEvent(event);
  assert.equal(event.defaultPrevented, true, "Prevent default on successful submit too");
  assert.notEqual(book.getAttribute("aria-invalid"), "true", "Remove invalid state after correction");
  assert.equal(document.querySelector("#request-status").textContent.includes("River Atlas"), true, "Mention the requested title");
});
