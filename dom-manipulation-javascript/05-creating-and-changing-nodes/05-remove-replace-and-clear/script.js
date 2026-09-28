document.querySelector("#expired").remove();
const current = document.createElement("li");
current.textContent = "Market on Friday";
document.querySelector("#outdated").replaceWith(current);
document.querySelector("#scratch").replaceChildren();
