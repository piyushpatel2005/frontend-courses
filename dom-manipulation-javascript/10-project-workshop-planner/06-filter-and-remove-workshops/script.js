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
    if (!item) continue;
    // TODO: Step 2: complete the corresponding task here.
    sessionList.append(item);
  }
  filterSessions();
}
updateButton.addEventListener("click", () => {
  if (!sessions.length) {
    // TODO: Step 4: complete the corresponding task here.
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
    // TODO: Step 1: complete the corresponding task here.
    // TODO: Step 6: complete the corresponding task here.
  }
  // TODO: Step 6: complete the corresponding task here.
}
query.addEventListener("input", filterSessions);
sessionList.addEventListener("click", (event) => {
  const button = event.target.closest("button.remove-session");
  if (!button || !sessionList.contains(button)) return;
  const item = button.closest("li");
  const index = Array.from(sessionList.children).indexOf(item);
  if (index < 0) return;
  // TODO: Step 3: complete the corresponding task here.
  // TODO: Step 7: complete the corresponding task here.
  // TODO: Step 8: complete the corresponding task here.
});
renderSessions();
