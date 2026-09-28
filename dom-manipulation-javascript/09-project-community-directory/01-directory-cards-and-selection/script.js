const tools = document.querySelector("#tools");
const toolName = document.querySelector("#tool-name");
const loanNote = document.querySelector("#loan-note");
tools.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button || !tools.contains(button)) return;
  const item = button.closest("li");
  tools.querySelectorAll("li").forEach((row) => row.classList.remove("selected"));
  item.classList.add("selected");
  toolName.textContent = item.dataset.tool;
  loanNote.textContent = item.dataset.note;
});
