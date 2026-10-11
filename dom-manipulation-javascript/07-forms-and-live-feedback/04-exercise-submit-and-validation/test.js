// Restore the exact form/display state even when an assertion fails.
async function withRestoredState(check) {
  const elements = [...document.querySelectorAll("input, select, [role='status'], strong, button")];
  const saved = elements.map(el => ({el, value:el.value, checked:el.checked,
    invalid:el.getAttribute("aria-invalid"), children:[...el.childNodes]}));
  const focus = document.activeElement;
  try { await check(); } finally {
    for (const {el,value,checked,invalid,children} of saved) {
      if (value !== undefined) el.value = value;
      if (checked !== undefined) el.checked = checked;
      if (invalid === null) el.removeAttribute("aria-invalid"); else el.setAttribute("aria-invalid", invalid);
      if (el.matches("[role='status'], strong")) el.replaceChildren(...children);
    }
    if (focus?.isConnected) focus.focus();
  }
}
function submitTitle(value) {
  document.querySelector("#book").value = value;
  const event = new Event("submit", {bubbles: true, cancelable: true});
  document.querySelector("#request").dispatchEvent(event);
  return event;
}
test("Every submission stays on the page", () => withRestoredState(async () => {
  for (const value of ["", "   ", "River Atlas"]) {
    assert.equal(submitTitle(value).defaultPrevented, true, "Cancel every submit default");
  }
}));
test("Blank titles get a useful message", () => withRestoredState(async () => {
  const status = document.querySelector("#request-status");
  for (const blank of ["", "  "]) {
    status.textContent = "Previous request";
    submitTitle(blank);
    assert.includes(status.textContent, "Enter a book title");
  }
}));
test("Blank titles expose the invalid field and focus it", () => withRestoredState(async () => {
  const book = document.querySelector("#book");
  book.removeAttribute("aria-invalid");
  document.querySelector("button").focus();
  submitTitle("   ");
  assert.equal(book.getAttribute("aria-invalid"), "true");
  assert.equal(document.activeElement, book);
}));
test("Valid titles receive a trimmed, literal confirmation", () => withRestoredState(async () => {
  const status = document.querySelector("#request-status");
  for (const title of ["River Atlas", "<em>Reed & River</em>"]) {
    status.textContent = "Old message";
    submitTitle("  " + title + "  ");
    assert.equal(status.textContent, `Hold requested for ${title}.`);
    assert.equal(status.children.length, 0, "Display the title as text");
  }
}));
test("A corrected title loses its invalid state", () => withRestoredState(async () => {
  const book = document.querySelector("#book");
  book.setAttribute("aria-invalid", "true");
  submitTitle("River Atlas");
  assert.notEqual(book.getAttribute("aria-invalid"), "true");
}));
