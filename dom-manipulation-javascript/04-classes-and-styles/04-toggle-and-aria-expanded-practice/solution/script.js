const helpToggle = document.querySelector("#help-toggle");
const helpPanel = document.querySelector("#help-panel");
helpToggle.addEventListener("click", () => {
  const isOpen = helpPanel.classList.toggle("is-open");
  helpPanel.hidden = !isOpen;
  helpToggle.setAttribute("aria-expanded", String(isOpen));
});
