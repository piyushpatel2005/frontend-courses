const bike = document.querySelector("#bike-clinic");
if (bike) {
  const status = bike.querySelector(".status");
  if (status) {
    status.textContent = "Mechanics ready";
  }
}
function updateOptionalAlert() {
  const alert = document.querySelector(".optional-alert");
  if (alert) {
    alert.textContent = "Check the desk";
  }
}
updateOptionalAlert();
