const sessions = [
  { title: "Screen printing basics", time: "09:00", track: "Art" },
  { title: "Repair café", time: "11:00", track: "Making" }
];
window.workshopSessions = sessions; // Expose state so preview checks can supply a title safely.
const sessionList = document.querySelector("#sessions");
const updateButton = document.querySelector("#update-session");
// Render each session as an <li> using textContent, then wire the update button.
