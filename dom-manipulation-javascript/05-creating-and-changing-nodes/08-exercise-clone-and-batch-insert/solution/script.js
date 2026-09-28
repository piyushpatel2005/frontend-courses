const list = document.querySelector("#exhibits");
const original = list.querySelector(".exhibit");

function makeExhibit(name) {
  const copy = original.cloneNode(true);
  copy.querySelector(".exhibit-name").textContent = name;
  return copy;
}

function addExhibits() {
  const batch = document.createDocumentFragment();
  batch.append(makeExhibit("Woven basket"), makeExhibit("Glass bead"));
  list.append(batch);
}

addExhibits();
