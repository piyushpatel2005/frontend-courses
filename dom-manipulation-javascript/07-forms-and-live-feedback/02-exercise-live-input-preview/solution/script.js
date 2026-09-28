const volunteer = document.querySelector("#volunteer");
const greeting = document.querySelector("#greeting");
volunteer.addEventListener("input", () => {
  greeting.textContent = volunteer.value.trim() || "friend";
});