const workshopCard = document.querySelector("#workshop-card");
const themeStatus = document.querySelector("#theme-status");
themeStatus.textContent = "Teal accent selected.";

document.querySelector("#plum-accent").addEventListener("click", () => {
  workshopCard.style.setProperty("--accent", "#713e83");
  themeStatus.textContent = "Plum accent selected.";
});

document.querySelector("#reset-accent").addEventListener("click", () => {
  workshopCard.style.removeProperty("--accent");
  themeStatus.textContent = "Teal accent restored.";
});
