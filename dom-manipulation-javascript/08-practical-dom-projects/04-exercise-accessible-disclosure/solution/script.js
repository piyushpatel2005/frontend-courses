const toggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#guide-menu");
toggle.addEventListener("click", () => {
  if (toggle.getAttribute("aria-expanded") !== "true") {
    toggle.setAttribute("aria-expanded", "true");
    menu.hidden = false;
    return;
  }
  // The expanded branch runs only when the menu was already open.
  {
    toggle.setAttribute("aria-expanded", "false");
    menu.hidden = true;
  }
});
