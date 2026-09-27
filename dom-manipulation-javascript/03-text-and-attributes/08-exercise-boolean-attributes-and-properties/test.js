test("Initial sign-up is disabled and explains why", () => {
  const box = document.querySelector("#shift-agreement");
  const button = document.querySelector("#join-shift");
  const status = document.querySelector("#shift-status");
  assert.exists(box, "Keep #shift-agreement");
  assert.exists(button, "Keep #join-shift");
  assert.exists(status, "Keep #shift-status");
  assert.equal(box.checked, false, "Start with an unchecked agreement");
  assert.equal(button.disabled, true, "Start with sign-up disabled");
  assert.equal(button.hasAttribute("disabled"), true, "Keep the reflected disabled attribute");
  assert.equal(status.textContent.trim(), "Read the shift details first.", "Initialize the status message");
});

test("Checking the agreement enables sign-up", () => {
  const box = document.querySelector("#shift-agreement");
  const button = document.querySelector("#join-shift");
  const status = document.querySelector("#shift-status");
  box.checked = false;
  box.dispatchEvent(new Event("change", { bubbles: true }));
  box.checked = true;
  box.dispatchEvent(new Event("change", { bubbles: true }));
  assert.equal(button.disabled, false, "Use the checked property to enable sign-up");
  assert.equal(button.hasAttribute("disabled"), false, "Remove disabled when enabled");
  assert.equal(status.textContent.trim(), "Sign-up is ready.", "Announce the available action");
});

test("Unchecking the agreement disables sign-up again", () => {
  const box = document.querySelector("#shift-agreement");
  const button = document.querySelector("#join-shift");
  const status = document.querySelector("#shift-status");
  box.checked = true;
  box.dispatchEvent(new Event("change", { bubbles: true }));
  assert.equal(button.disabled, false, "Checking should first enable sign-up");
  box.checked = false;
  box.dispatchEvent(new Event("change", { bubbles: true }));
  assert.equal(button.disabled, true, "Disable sign-up when unchecked");
  assert.equal(button.hasAttribute("disabled"), true, "Restore the disabled attribute");
  assert.equal(status.textContent.trim(), "Read the shift details first.", "Restore the initial message");
});
