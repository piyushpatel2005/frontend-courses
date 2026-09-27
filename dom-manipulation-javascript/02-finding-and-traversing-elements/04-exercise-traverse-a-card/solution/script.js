const label = document.querySelector(".featured-tool");
const row = label.parentElement;
row.children[0].textContent += " (available)";
const card = label.closest("article");
card.dataset.featured = "yes";
