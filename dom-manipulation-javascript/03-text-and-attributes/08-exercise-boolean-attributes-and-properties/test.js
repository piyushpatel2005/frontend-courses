// Native focus/layout checks need a rendered document, not only parsed markup.
async function withPreviewLayout(check) {
  await new Promise(resolve => requestAnimationFrame(resolve));
  return await check();
}
test("Explains the initial unchecked state", () => withPreviewLayout(() => {
  assert.equal(document.querySelector("#shift-status").textContent.trim(),
    "Read the shift details first.", "Initialize the status inside updateShift");
}));
test("The button follows the current checkbox state", () => withPreviewLayout(() => {
  const box = document.querySelector("#shift-agreement");
  const button = document.querySelector("#join-shift");
  const checked = box.checked;
  const disabled = button.disabled;
  const status = document.querySelector("#shift-status");
  const text = status.textContent;
  try {
    box.checked = true;
    box.dispatchEvent(new Event("change", { bubbles: true }));
    assert.equal(button.disabled, false, "Enable sign-up when checked");
    box.checked = false;
    box.dispatchEvent(new Event("change", { bubbles: true }));
    assert.equal(button.disabled, true, "Disable sign-up when unchecked");
  } finally {
    box.checked = checked;
    button.disabled = disabled;
    status.textContent = text;
  }
}));
test("The status follows the button's disabled attribute", () => withPreviewLayout(() => {
  const box = document.querySelector("#shift-agreement");
  const button = document.querySelector("#join-shift");
  const status = document.querySelector("#shift-status");
  const checked = box.checked;
  const disabled = button.disabled;
  const text = status.textContent;
  try {
    box.checked = true;
    button.disabled = false;
    updateShift();
    assert.equal(status.textContent.trim(), "Sign-up is ready.", "Explain the enabled state");
    box.checked = false;
    button.disabled = true;
    updateShift();
    assert.equal(status.textContent.trim(), "Read the shift details first.", "Explain the disabled state");
  } finally {
    box.checked = checked;
    button.disabled = disabled;
    status.textContent = text;
  }
}));
