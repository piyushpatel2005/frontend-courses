const list = document.querySelector("#messages");
list.addEventListener("click", function (event) {
  const button = event.target.closest("button[data-remove]");
  if (!button || !event.currentTarget.contains(button)) return;
  button.closest("li").remove();
});

document.querySelector("#add").addEventListener("click", function () {
  const item = document.createElement("li");
  item.append(document.createTextNode("Fresh message "));
  const button = document.createElement("button");
  button.type = "button";
  button.dataset.remove = "";
  button.textContent = "Remove";
  item.append(button);
  list.append(item);
});
