let announcements = 0;
document.querySelector("#once").addEventListener("click", function () {
  announcements += 1;
  document.querySelector("#once-count").textContent = "Announcements: " + announcements;
}, { once: true });
let chimes = 0;
const chime = document.querySelector("#chime");
function ring() {
  chimes += 1;
  document.querySelector("#chime-count").textContent = "Chimes: " + chimes;
}
chime.addEventListener("click", ring);
document.querySelector("#disable").addEventListener("click", function () {
  chime.removeEventListener("click", ring);
});
const log = document.querySelector("#log");
const panel = document.querySelector("#panel");
panel.addEventListener("click", function () { log.textContent += "Panel "; });
document.querySelector("#normal").addEventListener("click", function () { log.textContent += "Normal "; });
document.querySelector("#quiet").addEventListener("click", function (event) {
  event.stopPropagation();
  log.textContent += "Quiet ";
});
