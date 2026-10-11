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
test("Enter in the search field is handled and canceled", () => withRestoredState(async () => {
  const input = document.querySelector("#recipe");
  const result = document.querySelector("#recipe-result");
  input.value = "  Bread  ";
  const accepted = input.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true, cancelable: true }));
  assert.equal(accepted, false, "Prevent Enter's default action in the search field");
  assert.equal(result.textContent, "Finding: Bread", "Show the trimmed search term");
  input.value = "Pie";
  const tabAccepted = input.dispatchEvent(new KeyboardEvent("keydown", { key: "Tab", bubbles: true, cancelable: true }));
  const letterAccepted = input.dispatchEvent(new KeyboardEvent("keydown", { key: "p", bubbles: true, cancelable: true }));
  assert.equal(tabAccepted, true, "Do not cancel Tab navigation");
  assert.equal(letterAccepted, true, "Do not cancel ordinary typing");
}));
test("Form submission shows the same result without navigation", () => withRestoredState(async () => {
  const input = document.querySelector("#recipe");
  const form = document.querySelector("#recipe-form");
  input.value = "Pie";
  const submitted = form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  assert.equal(submitted, false, "Prevent the form from navigating on submit");
  assert.equal(document.querySelector("#recipe-result").textContent, "Finding: Pie", "The Search button should use the same result");
}));
