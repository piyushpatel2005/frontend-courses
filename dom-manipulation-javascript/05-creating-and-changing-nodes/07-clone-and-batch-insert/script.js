const list = document.querySelector("#plants");
const example = list.querySelector(".plant-card");
const batch = document.createDocumentFragment();
for (const name of ["Basil", "Mint"]) {
  const copy = example.cloneNode(true);
  copy.querySelector(".plant-name").textContent = name;
  batch.append(copy);
}
list.append(batch);
