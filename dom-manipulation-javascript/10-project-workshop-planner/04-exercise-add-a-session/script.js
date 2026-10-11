const sessions = [
  { title: "Screen printing basics", time: "09:00", track: "Art" },
  { title: "Repair café", time: "11:00", track: "Making" }
];
window.workshopSessions = sessions; // Preview checks can try temporary data without changing the seed.
const sessionList = document.querySelector("#sessions");
const updateButton = document.querySelector("#update-session");
function createSessionRow(session) {
  const item = document.createElement("li");
  item.dataset.title = session.title;
  item.textContent = `${session.time} — ${session.title} (${session.track})`;
  return item;
}
function renderSessions() {
  sessionList.replaceChildren();
  for (const session of sessions) {
    const item = createSessionRow(session);
    if (item) sessionList.append(item);
  }
}
updateButton.addEventListener("click", () => {
  sessions[0].time = "10:00";
  renderSessions();
});
renderSessions();
