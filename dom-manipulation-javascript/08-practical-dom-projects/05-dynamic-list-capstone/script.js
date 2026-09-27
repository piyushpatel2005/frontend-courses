const toolForm = document.querySelector("#tool-form");
const toolName = document.querySelector("#tool-name");
const tools = document.querySelector("#tools");
const toolStatus = document.querySelector("#tool-status");
toolForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = toolName.value.trim();
  if (!name) {
    toolStatus.textContent = "Enter a tool name first.";
    toolName.focus();
    return;
  }
  const item = document.createElement("li");
  const label = document.createElement("span");
  label.textContent = name;
  const remove = document.createElement("button");
  remove.type = "button";
  remove.textContent = "Remove";
  item.append(label, " ", remove);
  tools.append(item);
  toolStatus.textContent = `Added ${name}.`;
  toolForm.reset();
  toolName.focus();
});
tools.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button || !tools.contains(button)) return;
  const item = button.closest("li");
  if (!item) return;
  const name = item.querySelector("span").textContent;
  item.remove();
  toolStatus.textContent = `Removed ${name}.`;
});