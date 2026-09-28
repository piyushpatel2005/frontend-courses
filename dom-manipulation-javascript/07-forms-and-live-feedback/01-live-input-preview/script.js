const plot = document.querySelector("#plot");
const badge = document.querySelector("#badge");
plot.addEventListener("input", () => {
  badge.textContent = plot.value.trim() || "Untitled plot";
});