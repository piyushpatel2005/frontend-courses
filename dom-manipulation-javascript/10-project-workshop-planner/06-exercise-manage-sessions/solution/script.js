const sessions = [
  { title: "Screen printing basics", time: "09:00", track: "Art" },
  { title: "Repair café", time: "11:00", track: "Making" }
];
const sessionList = document.querySelector("#sessions");
const updateButton = document.querySelector("#update-session");
function renderSessions() {
  sessionList.replaceChildren();
  for (const session of sessions) {
    const item = document.createElement("li");
    item.textContent = `${session.time} — ${session.title} (${session.track})`;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-session";
    remove.textContent = `Remove ${session.title}`;
    item.append(" ", remove);
    sessionList.append(item);
  }
  filterSessions();
}
updateButton.addEventListener("click", () => {
  if (!sessions.length) {
    status.textContent = "No sessions to update.";
    return;
  }
  sessions[0].time = "10:00";
  renderSessions();
});

const form = document.querySelector("#session-form");
const titleField = document.querySelector("#session-title");
const timeField = document.querySelector("#session-time");
const trackField = document.querySelector("#session-track");
const status = document.querySelector("#session-status");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = titleField.value.trim();
  const time = timeField.value;
  if (!title || !time) {
    status.textContent = "Enter a title and start time.";
    (!title ? titleField : timeField).focus();
    return;
  }
  sessions.push({ title, time, track: trackField.value });
  renderSessions();
  status.textContent = `Added ${title}.`;
  form.reset();
  titleField.focus();
});

const query = document.querySelector("#session-query");
const count = document.querySelector("#session-count");
function filterSessions() {
  const term = query.value.trim().toLowerCase();
  let shown = 0;
  for (const item of sessionList.children) {
    item.hidden = !item.firstChild.textContent.toLowerCase().includes(term);
    if (!item.hidden) shown += 1;
  }
  count.textContent = `${shown} sessions shown`;
}
query.addEventListener("input", filterSessions);
sessionList.addEventListener("click", (event) => {
  const button = event.target.closest("button.remove-session");
  if (!button || !sessionList.contains(button)) return;
  const item = button.closest("li");
  const index = Array.from(sessionList.children).indexOf(item);
  if (index < 0) return;
  const removed = sessions.splice(index, 1)[0];
  renderSessions();
  status.textContent = `Removed ${removed.title}. ${count.textContent}.`;
});
renderSessions();
