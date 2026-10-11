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
test("input updates the greeting repeatedly as safe text", () => withRestoredState(async () => {
  const input = document.querySelector("#volunteer");
  const output = document.querySelector("#greeting");
  input.value = "Ada";
  input.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal(output.textContent.trim(), "Ada", "Show the current name");
  input.value = "<em>Bea</em>";
  input.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal(output.textContent.trim(), "<em>Bea</em>", "Treat typed characters as text");
  assert.equal(output.querySelector("em"), null, "Do not parse typed markup");
}));
test("clearing the field restores the fallback", () => withRestoredState(async () => {
  const input = document.querySelector("#volunteer");
  const output = document.querySelector("#greeting");
  input.value = "";
  output.textContent = "Previously shown name"; // Do not depend on the preceding test.
  input.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal(output.textContent.trim(), "friend", "Restore friend when empty");
}));
