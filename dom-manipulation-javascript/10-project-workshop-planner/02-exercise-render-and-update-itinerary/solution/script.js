const sessions = [
  { title: "Screen printing basics", time: "09:00", track: "Art" },
  { title: "Repair café", time: "11:00", track: "Making" }
];
window.workshopSessions = sessions; // Expose state so preview checks can supply a title safely.
const sessionList = document.querySelector("#sessions");
const updateButton = document.querySelector("#update-session");
function renderSessions() {
  sessionList.replaceChildren();
  for (const session of sessions) {
    const item = document.createElement("li");
    item.textContent = `${session.time} — ${session.title} (${session.track})`;
    sessionList.append(item);
  }
}
updateButton.addEventListener("click", () => {
  sessions[0].time = "10:00";
  renderSessions();
});
renderSessions();
