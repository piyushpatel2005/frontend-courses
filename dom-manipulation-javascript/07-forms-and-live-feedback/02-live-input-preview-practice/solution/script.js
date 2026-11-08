const volunteer = document.querySelector("#volunteer");
const greeting = document.querySelector("#greeting");
volunteer.addEventListener("input", () => {
  const name = volunteer.value.trim();
  if (name) {
    greeting.textContent = name;
  } else {
    greeting.textContent = "friend";
  }
});
