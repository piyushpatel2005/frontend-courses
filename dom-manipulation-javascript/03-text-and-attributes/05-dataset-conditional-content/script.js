const gardenCard = document.querySelector("#garden-card");
const gardenMessage = document.querySelector("#garden-message");
if (gardenCard.dataset.status === "open") {
  gardenMessage.textContent = "Garden visits are open today.";
} else {
  gardenMessage.textContent = "Garden visits are closed today.";
}
