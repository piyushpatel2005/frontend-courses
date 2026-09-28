const card = document.querySelector("#stall-card");
const status = document.querySelector("#accent-status");
document.querySelector("#warm-accent").addEventListener("click", () => {
  card.style.setProperty("--accent", "#b54435");
  status.textContent = "Warm accent selected.";
});
document.querySelector("#default-accent").addEventListener("click", () => {
  card.style.removeProperty("--accent");
  status.textContent = "Default accent restored.";
});
