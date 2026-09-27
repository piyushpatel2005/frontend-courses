const agreement = document.querySelector("#shift-agreement");
const joinShift = document.querySelector("#join-shift");
const shiftStatus = document.querySelector("#shift-status");

function updateShift() {
  joinShift.disabled = !agreement.checked;
  shiftStatus.textContent = joinShift.hasAttribute("disabled")
    ? "Read the shift details first."
    : "Sign-up is ready.";
}

agreement.addEventListener("change", updateShift);
updateShift();
