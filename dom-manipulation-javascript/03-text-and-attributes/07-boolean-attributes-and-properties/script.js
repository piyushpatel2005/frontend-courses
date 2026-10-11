const consent = document.querySelector("#tour-consent");
const reserve = document.querySelector("#reserve-tour");
const status = document.querySelector("#booking-status");

function updateBooking() {
  reserve.disabled = !consent.checked;
  if (reserve.hasAttribute("disabled")) {
    status.textContent = "Agree to the tour instructions first.";
  } else {
    status.textContent = "Tour booking is ready.";
  }
}

consent.addEventListener("change", updateBooking);
updateBooking();
