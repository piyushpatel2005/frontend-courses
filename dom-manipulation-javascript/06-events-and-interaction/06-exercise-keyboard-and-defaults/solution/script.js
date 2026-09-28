const input = document.querySelector("#recipe");
const form = document.querySelector("#recipe-form");
function showRecipe() {
  document.querySelector("#recipe-result").textContent = "Finding: " + input.value.trim();
}
input.addEventListener("keydown", function (event) {
  if (event.key !== "Enter") return;
  event.preventDefault();
  showRecipe();
});
form.addEventListener("submit", function (event) {
  event.preventDefault();
  showRecipe();
});
