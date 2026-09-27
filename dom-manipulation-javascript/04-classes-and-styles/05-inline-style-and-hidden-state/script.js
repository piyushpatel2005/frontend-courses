const weatherNotice = document.querySelector("#weather-notice");
document.querySelector("#accent-notice").addEventListener("click", () => {
  weatherNotice.style.borderColor = "teal";
  weatherNotice.style.borderStyle = "solid";
});
document.querySelector("#feature-notice").addEventListener("click", () => {
  weatherNotice.classList.add("highlight");
});
document.querySelector("#hide-notice").addEventListener("click", () => {
  weatherNotice.hidden = true;
});
document.querySelector("#show-notice").addEventListener("click", () => {
  weatherNotice.hidden = false;
});
