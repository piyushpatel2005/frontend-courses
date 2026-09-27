const toggle = document.querySelector("#directions-toggle");
const directions = document.querySelector("#directions");
toggle.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!isOpen));
  directions.hidden = isOpen;
});