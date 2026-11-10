const input = document.querySelector("#recipe");
const form = document.querySelector("#recipe-form");
// The display function is supplied so each task adds just one event path.
function showRecipe() {
  document.querySelector("#recipe-result").textContent = "Finding: " + input.value.trim();
}
input.addEventListener("keydown", event => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  showRecipe();
});
form.addEventListener("submit", event => {
  event.preventDefault();
  showRecipe();
});
