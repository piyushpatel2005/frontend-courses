test("button describes a hidden navigation panel", () => {
  const toggle = document.querySelector("#menu-toggle");
  const menu = document.querySelector("#guide-menu");
  assert.exists(toggle, "Keep the menu button");
  assert.equal(toggle.tagName, "BUTTON", "Use a native button for keyboard access");
  assert.exists(menu, "Keep the guide navigation panel");
  assert.equal(menu.tagName, "NAV", "Use a navigation landmark");
  assert.equal(toggle.getAttribute("aria-controls"), menu.id, "Connect button and panel");
  assert.equal(toggle.getAttribute("aria-expanded"), "false", "Begin collapsed");
  assert.equal(menu.hidden, true, "Begin hidden");
});
test("first activation opens and announces expanded state", () => {
  const toggle = document.querySelector("#menu-toggle");
  const menu = document.querySelector("#guide-menu");
  toggle.click();
  assert.equal(menu.hidden, false, "Reveal the menu");
  assert.equal(toggle.getAttribute("aria-expanded"), "true", "Announce expanded state");
});
test("second activation closes and announces collapsed state", () => {
  const toggle = document.querySelector("#menu-toggle");
  const menu = document.querySelector("#guide-menu");
  toggle.click();
  assert.equal(menu.hidden, true, "Hide the menu again");
  assert.equal(toggle.getAttribute("aria-expanded"), "false", "Announce collapsed state");
});
