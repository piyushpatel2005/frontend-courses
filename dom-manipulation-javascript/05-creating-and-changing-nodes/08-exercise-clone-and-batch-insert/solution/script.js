const list = document.querySelector("#exhibits");
const original = list.querySelector(".exhibit");
const batch = document.createDocumentFragment();
for (const name of ["Woven basket", "Glass bead"]) {
  const copy = original.cloneNode(true);
  copy.querySelector(".exhibit-name").textContent = name;
  batch.append(copy);
}
list.append(batch);
