const sessions = [
  { title: "Screen printing basics", time: "09:00", track: "Art" },
  { title: "Repair café", time: "11:00", track: "Making" }
];
window.workshopSessions = sessions; // Preview checks can try temporary data without changing the seed.
const sessionList = document.querySelector("#sessions");
const updateButton = document.querySelector("#update-session");
// Return one prepared <li>; leave insertion to renderSessions().
function createSessionRow(session) {
  return null;
}
function renderSessions() {
  // Rebuild the list from sessions.
}
updateButton.addEventListener("click", () => {
  // Change state, then render.
});
renderSessions();
