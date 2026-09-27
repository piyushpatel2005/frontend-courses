const agreement = document.querySelector("#shift-agreement");
const joinShift = document.querySelector("#join-shift");
const shiftStatus = document.querySelector("#shift-status");
function updateShift() {
  joinShift.disabled = !agreement.checked;
  // Set the status message based on whether the button has disabled.
}
updateShift();
// Listen for checkbox changes.
