const form = document.querySelector("#task-form");
const input = document.querySelector("#task-name");
const tasks = document.querySelector("#tasks");
const status = document.querySelector("#task-status");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = input.value.trim();
  if (!title) {
    status.textContent = "Enter a task before adding it.";
    input.focus();
    return;
  }
  const item = document.createElement("li");
  const label = document.createElement("span");
  label.textContent = title;
  const remove = document.createElement("button");
  remove.type = "button";
  remove.textContent = "Remove";
  item.append(label, " ", remove);
  tasks.append(item);
  status.textContent = `Added ${title}.`;
  form.reset();
  input.focus();
});
tasks.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button || !tasks.contains(button)) return;
  const item = button.closest("li");
  if (!item) return;
  const title = item.querySelector("span").textContent;
  item.remove();
  status.textContent = `Removed ${title}.`;
});