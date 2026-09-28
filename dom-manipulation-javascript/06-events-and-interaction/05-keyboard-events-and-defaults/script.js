const field = document.querySelector("#trail");
const form = document.querySelector("#finder");
function showResult() {
  document.querySelector("#result").textContent = "Searching for: " + field.value.trim();
}
field.addEventListener("keydown", function (event) {
  if (event.key !== "Enter") return;
  event.preventDefault();
  showResult();
});
form.addEventListener("submit", function (event) {
  event.preventDefault();
  showResult();
});
