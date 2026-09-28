const pickupForm = document.querySelector("#pickup-form");
const windowChoice = document.querySelector("#window");
const pickupSummary = document.querySelector("#pickup-summary");
function renderPickup() {
  pickupSummary.textContent = windowChoice.value;
}
windowChoice.addEventListener("change", renderPickup);
pickupForm.addEventListener("reset", () => queueMicrotask(renderPickup));