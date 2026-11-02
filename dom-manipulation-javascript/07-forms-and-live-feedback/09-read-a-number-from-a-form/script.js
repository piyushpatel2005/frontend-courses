const seats = document.querySelector("#seats");
const status = document.querySelector("#seat-status");
function readQuantity() {
  // TODO: Step 1: complete the corresponding task here.
  return null;
}
function showQuantity() {
  // TODO: Step 2: complete the corresponding task here.
}
// Supplied event wiring and navigation prevention, not assessed tasks.
seats.addEventListener("input", showQuantity);
document.querySelector("#seat-form").addEventListener("submit", event => {
  event.preventDefault();
  showQuantity();
});
