const sessionCard = document.querySelector("#session-card");
const sessionMessage = document.querySelector("#session-message");
function updateSessionMessage() {
  if (sessionCard.dataset.sessionState === "open") {
    // Show the open message here.
  } else {
    // Show the full message here.
  }
}
updateSessionMessage();
