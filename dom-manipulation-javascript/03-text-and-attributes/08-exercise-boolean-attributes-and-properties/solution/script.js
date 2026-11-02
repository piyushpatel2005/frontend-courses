const agreement = document.querySelector("#shift-agreement");
const joinShift = document.querySelector("#join-shift");
const shiftStatus = document.querySelector("#shift-status");
function updateShift() {
  if (!agreement.checked) {
    shiftStatus.textContent = "Read the shift details first.";
  }
  joinShift.disabled = !agreement.checked;
  if (!joinShift.hasAttribute("disabled")) {
    shiftStatus.textContent = "Sign-up is ready.";
  }
}
agreement.addEventListener("change", updateShift);
updateShift();
