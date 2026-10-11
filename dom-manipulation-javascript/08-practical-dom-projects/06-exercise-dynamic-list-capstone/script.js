const form = document.querySelector("#task-form");
const input = document.querySelector("#task-name");
const tasks = document.querySelector("#tasks");
const status = document.querySelector("#task-status");
// Prepare one detached task. The submit handler will insert it later.
function createTask(title) {
  return null;
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = input.value.trim();
  // Explain a blank title here.
  if (!title) return; // Keep unfinished work from adding an empty row.
  // Insert the prepared task here.
});
