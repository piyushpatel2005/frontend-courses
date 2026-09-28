let welcomes = 0;
document.querySelector("#welcome").addEventListener("click", function () {
  welcomes += 1;
  document.querySelector("#welcome-count").textContent = "Welcomes: " + welcomes;
}, { once: true });
let bells = 0;
const bell = document.querySelector("#bell");
function ringBell() {
  bells += 1;
  document.querySelector("#bell-count").textContent = "Bells: " + bells;
}
bell.addEventListener("click", ringBell);
document.querySelector("#mute").addEventListener("click", function () {
  bell.removeEventListener("click", ringBell);
});
const output = document.querySelector("#actions");
document.querySelector("#controls").addEventListener("click", function () {
  output.textContent += "Panel ";
});
document.querySelector("#standard").addEventListener("click", function () {
  output.textContent += "Standard ";
});
document.querySelector("#private").addEventListener("click", function (event) {
  event.stopPropagation();
  output.textContent += "Private ";
});
