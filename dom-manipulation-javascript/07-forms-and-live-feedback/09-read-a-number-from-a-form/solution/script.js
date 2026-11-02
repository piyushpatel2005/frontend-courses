const seats = document.querySelector("#seats");
const status = document.querySelector("#seat-status");
function readQuantity() {
  const quantity = seats.valueAsNumber;
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 12) return null;
  return quantity;
}
function showQuantity() {
  const quantity = readQuantity();
  status.textContent = quantity === null
    ? "Choose a whole number from 1 to 12."
    : `${quantity} seats requested.`;
}
// Supplied event wiring and navigation prevention, not assessed tasks.
seats.addEventListener("input", showQuantity);
document.querySelector("#seat-form").addEventListener("submit", event => {
  event.preventDefault();
  showQuantity();
});
