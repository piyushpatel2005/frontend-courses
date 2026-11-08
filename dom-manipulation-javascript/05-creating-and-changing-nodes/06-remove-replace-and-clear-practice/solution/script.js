document.querySelector("#expired").remove();
const correctedHours = document.createElement("li");
correctedHours.textContent = "Gallery opens at 10 am";
document.querySelector("#old-hours").replaceWith(correctedHours);
document.querySelector("#drafts").replaceChildren();
