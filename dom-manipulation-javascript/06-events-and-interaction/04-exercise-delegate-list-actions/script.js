const pantry = document.querySelector("#pantry");
// Add item is provided; write ONE delegated listener for the list below.
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
