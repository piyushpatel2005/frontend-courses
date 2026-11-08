const form = document.querySelector("#task-form");
const input = document.querySelector("#task-name");
const tasks = document.querySelector("#tasks");
const status = document.querySelector("#task-status");
function createTask(title) {
  // TODO: Step 2: complete the corresponding task here.
  return null;
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = input.value.trim();
  if (!title) {
    // TODO: Step 1: complete the corresponding task here.
    input.focus();
    return;
  }
  // TODO: Step 3: complete the corresponding task here.
});
tasks.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button || !tasks.contains(button)) return;
  const item = button.closest("li");
  if (!item) return;
  const title = item.querySelector("span").textContent;
  // TODO: Step 4: complete the corresponding task here.
  // TODO: Step 5: complete the corresponding task here.
  // TODO: Step 6: complete the corresponding task here.
});
