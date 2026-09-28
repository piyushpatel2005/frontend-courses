const routeToggle = document.querySelector("#route-toggle");
const routeDetails = document.querySelector("#route-details");
routeToggle.addEventListener("click", () => {
  const isOpen = routeDetails.classList.toggle("is-open");
  routeDetails.hidden = !isOpen;
  routeToggle.setAttribute("aria-expanded", String(isOpen));
});
