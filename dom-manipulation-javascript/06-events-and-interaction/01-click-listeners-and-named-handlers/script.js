function showStatus() {
  document.querySelector("#status").textContent = "Trail is open";
}
document.querySelector("#check").addEventListener("click", showStatus);
