const form = document.querySelector("#tool-form");
const input = document.querySelector("#tool-name");
const list = document.querySelector("#tools");
const status = document.querySelector("#tool-status");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = input.value.trim();
  if (!name) {
    status.textContent = "Enter a tool name.";
    input.focus();
    return;
  }
  const item = document.createElement("li");
  item.textContent = name;
  list.append(item);
  status.textContent = `Added ${name}.`;
  form.reset();
  input.focus();
});
