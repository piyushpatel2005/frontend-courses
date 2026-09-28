const programme = document.querySelector("#programme");
const programmeStatus = document.querySelector("#programme-status");
document.querySelector("#mark-programme").addEventListener("click", () => {
  programme.classList.add("active");
  programmeStatus.textContent = `Marked: ${programme.classList.contains("active")}`;
});
document.querySelector("#clear-programme").addEventListener("click", () => {
  programme.classList.remove("active");
  programmeStatus.textContent = `Marked: ${programme.classList.contains("active")}`;
});
