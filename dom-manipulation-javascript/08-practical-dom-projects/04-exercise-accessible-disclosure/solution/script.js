const toggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#guide-menu");
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  menu.hidden = open;
});