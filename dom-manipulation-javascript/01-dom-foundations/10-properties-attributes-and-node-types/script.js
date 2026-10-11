const seed = document.getElementById("seed-name");
seed.value = "Basil";
const label = document.getElementById("seed-label");
const text = label.firstChild;
document.getElementById("current-value").textContent = seed.value;
document.getElementById("original-value").textContent = seed.getAttribute("value");
document.getElementById("node-kinds").textContent = `${label.nodeType} / ${text.nodeType}`;
