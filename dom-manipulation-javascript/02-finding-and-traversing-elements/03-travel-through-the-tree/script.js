const label = document.querySelector(".featured");
const card = label.parentElement;
const firstChild = card.children[0];
const article = label.closest("article");
firstChild.textContent += " ★";
article.dataset.picked = "yes";
