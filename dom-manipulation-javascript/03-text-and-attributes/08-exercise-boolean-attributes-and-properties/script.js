const agreement = document.querySelector("#shift-agreement");
const joinShift = document.querySelector("#join-shift");
const shiftStatus = document.querySelector("#shift-status");
function updateShift() {
  // Task 1: show the initial message.
  // Task 2: set disabled from the current checked property.
  // Task 3: choose the message from hasAttribute("disabled").
}
// Supplied: run our function after a change, and once now.
agreement.addEventListener("change", updateShift);
updateShift();
