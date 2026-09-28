const pantry = document.querySelector("#pantry");
document.querySelector("#add-item").addEventListener("click", function () {
  const item = document.createElement("li");
  item.append(document.createTextNode("Beans "));
  const button = document.createElement("button");
  button.type = "button";
  button.dataset.remove = "";
  const label = document.createElement("span");
  label.textContent = "Remove";
  button.append(label);
  item.append(button);
  pantry.append(item);
});

pantry.addEventListener("click", function (event) {
  const button = event.target.closest("button[data-remove]");
  if (!button || !event.currentTarget.contains(button)) return;
  button.closest("li").remove();
});
