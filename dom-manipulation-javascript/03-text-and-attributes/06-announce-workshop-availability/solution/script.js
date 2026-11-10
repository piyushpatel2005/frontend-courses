const sessionCard = document.querySelector("#session-card");
const sessionMessage = document.querySelector("#session-message");
function updateSessionMessage() {
  if (sessionCard.dataset.sessionState === "open") {
    sessionMessage.textContent = "Places are available.";
  } else {
    sessionMessage.textContent = "This session is full.";
  }
}
updateSessionMessage();
