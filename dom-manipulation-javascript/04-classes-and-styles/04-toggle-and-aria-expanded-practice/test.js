// Native focus/layout checks need a rendered document, not only parsed markup.
async function withPreviewLayout(check) {
  await new Promise(resolve => requestAnimationFrame(resolve));
  return await check();
}
test("Every click toggles the panel class", () => withPreviewLayout(() => {
  const button = document.querySelector("#help-toggle");
  const panel = document.querySelector("#help-panel");
  const before = panel.getAttribute("class");
  try {
    panel.classList.remove("is-open");
    button.click();
    assert.equal(panel.classList.contains("is-open"), true, "Add is-open on the first click");
    button.click();
    assert.equal(panel.classList.contains("is-open"), false, "Remove is-open on the second click");
  } finally {
    panel.setAttribute("class", before);
    panel.hidden = true;
    button.setAttribute("aria-expanded", "false");
  }
}));
test("Panel visibility follows its class in both directions", () => withPreviewLayout(() => {
  const button = document.querySelector("#help-toggle");
  const panel = document.querySelector("#help-panel");
  const before = panel.getAttribute("class");
  try {
    // Seed each opposite state; this check does not borrow the prior test's clicks.
    panel.classList.remove("is-open");
    panel.hidden = true;
    button.click();
    assert.equal(panel.hidden, false, "Reveal the open panel");
    assert.visible(panel, "Open content must have a visible layout box");
    panel.classList.add("is-open");
    panel.hidden = false;
    button.click();
    assert.equal(panel.hidden, true, "Hide the closed panel");
    assert.equal(getComputedStyle(panel).display, "none", "Closed content must leave layout");
  } finally {
    panel.setAttribute("class", before);
    panel.hidden = true;
    button.setAttribute("aria-expanded", "false");
  }
}));
test("The button announces the expanded and collapsed states", () => withPreviewLayout(() => {
  const button = document.querySelector("#help-toggle");
  const panel = document.querySelector("#help-panel");
  const before = panel.getAttribute("class");
  try {
    panel.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
    button.click();
    assert.equal(button.getAttribute("aria-expanded"), "true", "Announce the open state");
    panel.classList.add("is-open");
    button.setAttribute("aria-expanded", "true");
    button.click();
    assert.equal(button.getAttribute("aria-expanded"), "false", "Announce the closed state");
  } finally {
    panel.setAttribute("class", before);
    panel.hidden = true;
    button.setAttribute("aria-expanded", "false");
  }
}));
