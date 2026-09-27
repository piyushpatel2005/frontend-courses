const holds = ["Atlas of clouds", "Garden calendar", "Cloud journal"];
const list = document.querySelector("#holds");
const query = document.querySelector("#hold-query");
const count = document.querySelector("#hold-count");
function render() {
  list.replaceChildren();
  for (const title of holds) {
    const item = document.createElement("li");
    const label = document.createElement("span");
    label.textContent = title;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = `Remove ${title}`;
    item.append(label, " ", remove);
    item.hidden = !title.toLowerCase().includes(query.value.trim().toLowerCase());
    list.append(item);
  }
  count.textContent = `${Array.from(list.children).filter(item => !item.hidden).length} holds shown`;
}
query.addEventListener("input", render);
list.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button || !list.contains(button)) return;
  const index = Array.from(list.children).indexOf(button.closest("li"));
  if (index < 0) return;
  holds.splice(index, 1);
  render();
});
render();
