test("One click opens the help panel", () => {
  const button = document.querySelector("#help-toggle");
  const panel = document.querySelector("#help-panel");
  assert.exists(button, "Keep #help-toggle");
  assert.exists(panel, "Keep #help-panel");
  assert.equal(button.getAttribute("aria-controls"), "help-panel", "Keep aria-controls pointing at the panel");
  assert.equal(panel.hidden, true, "Start with the help panel hidden");
  button.click();
  assert.equal(panel.classList.contains("is-open"), true, "Toggle the is-open class on");
  assert.equal(panel.hidden, false, "Reveal the panel when open");
  assert.equal(button.getAttribute("aria-expanded"), "true", "Announce the expanded state");
});
test("A second click closes the help panel", () => {
  const button = document.querySelector("#help-toggle");
  const panel = document.querySelector("#help-panel");
  assert.exists(button, "Keep #help-toggle");
  assert.exists(panel, "Keep #help-panel");
  panel.classList.remove("is-open");
  panel.hidden = true;
  button.setAttribute("aria-expanded", "false");
  button.click();
  assert.equal(panel.classList.contains("is-open"), true, "First click must open the panel");
  assert.equal(panel.hidden, false, "First click must reveal the panel");
  button.click();
  assert.equal(panel.classList.contains("is-open"), false, "Toggle the is-open class off");
  assert.equal(panel.hidden, true, "Hide the collapsed panel");
  assert.equal(button.getAttribute("aria-expanded"), "false", "Announce the collapsed state");
});
