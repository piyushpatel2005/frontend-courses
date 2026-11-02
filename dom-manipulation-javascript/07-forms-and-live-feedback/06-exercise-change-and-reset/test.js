// Native focus/layout checks need a rendered document, not only parsed markup.
async function withPreviewLayout(check) {
  await new Promise(resolve => requestAnimationFrame(resolve));
  return await check();
}
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
test("change updates the summary every time", () => withPreviewLayout(() => withRestoredState(async () => {
  const lights = document.querySelector("#lights");
  const summary = document.querySelector("#lights-summary");
  for (const choice of ["Cool", "Bright"]) {
    lights.value = choice;
    lights.dispatchEvent(new Event("change", { bubbles: true }));
    assert.equal(summary.textContent.trim(), choice, `Show ${choice} after change`);
  }
})));
test("reset restores the displayed state", () => withPreviewLayout(() => withRestoredState(async () => {
  const form = document.querySelector("#lights-form");
  const lights = document.querySelector("#lights");
  const summary = document.querySelector("#lights-summary");
  lights.value = "Cool";
  summary.textContent = "Cool"; // Set up the prior display without relying on the change listener.
  form.reset();
  await new Promise((resolve) => setTimeout(resolve, 0));
  assert.equal(lights.value, "Warm", "The native reset restores the original option");
  assert.equal(summary.textContent.trim(), "Warm", "Reset the displayed summary too");
})));
