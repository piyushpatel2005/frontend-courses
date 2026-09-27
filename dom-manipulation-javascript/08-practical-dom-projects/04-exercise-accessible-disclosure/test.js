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
  menu.hidden = false;
  toggle.setAttribute("aria-expanded", "true"); // Set up the open state without depending on another test.
  toggle.click();
  assert.equal(menu.hidden, true, "Hide the menu again");
  assert.equal(toggle.getAttribute("aria-expanded"), "false", "Announce collapsed state");
});
