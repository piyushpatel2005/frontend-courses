const card = document.querySelector("#soup-card");
const badge = card.querySelector(".optional-badge");
if (badge) {
  badge.textContent = "Seasonal";
}
const status = card.querySelector(".status");
status.textContent = "Ready to serve";
