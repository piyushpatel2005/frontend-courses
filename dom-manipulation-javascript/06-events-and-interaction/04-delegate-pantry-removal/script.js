const pantry = document.querySelector("#pantry");
// Add item is supplied. It does not register any Remove listener.
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

function removePantryItem(event) {
  // TODO: Step 1: complete the corresponding task here.
}
// TODO: Step 2: complete the corresponding task here.
window.removePantryItem = removePantryItem;
