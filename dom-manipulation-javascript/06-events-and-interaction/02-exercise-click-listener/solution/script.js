function showHours() {
  document.querySelector("#hours").textContent = "Open until 6 pm";
}
document.querySelector("#hours-button").addEventListener("click", showHours);
