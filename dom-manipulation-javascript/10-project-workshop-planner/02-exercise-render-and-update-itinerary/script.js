const sessions = [
  { title: "Screen printing basics", time: "09:00", track: "Art" },
  { title: "Repair café", time: "11:00", track: "Making" }
];
window.workshopSessions = sessions; // Preview checks can try temporary data without changing the seed.
const sessionList = document.querySelector("#sessions");
const updateButton = document.querySelector("#update-session");
function createSessionRow(session) {
  // TODO: Step 1: complete the corresponding task here.
  return null;
}
function renderSessions() {
  // TODO: Step 2: complete the corresponding task here.
}
updateButton.addEventListener("click", () => {
  // TODO: Step 3: complete the corresponding task here.
});
renderSessions();
