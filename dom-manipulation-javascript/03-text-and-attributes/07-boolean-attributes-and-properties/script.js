const consent = document.querySelector("#tour-consent");
const reserve = document.querySelector("#reserve-tour");
const status = document.querySelector("#booking-status");

function updateBooking() {
  reserve.disabled = !consent.checked;
  status.textContent = reserve.hasAttribute("disabled")
    ? "Agree to the tour instructions first."
    : "Tour booking is ready.";
}

consent.addEventListener("change", updateBooking);
updateBooking();
