const form = document.querySelector("#rsvp");
const attendee = document.querySelector("#attendee");
const status = document.querySelector("#rsvp-status");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = attendee.value.trim();
  if (!name) {
    attendee.setAttribute("aria-invalid", "true");
    status.textContent = "Enter your name to reserve a seat.";
    attendee.focus();
    return;
  }
  attendee.removeAttribute("aria-invalid");
  status.textContent = `Seat reserved for ${name}.`;
});