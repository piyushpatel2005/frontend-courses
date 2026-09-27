const communityNotice = document.querySelector("#community-notice");
document.querySelector("#set-border").addEventListener("click", () => {
  communityNotice.style.borderColor = "teal";
  communityNotice.style.borderStyle = "solid";
});
document.querySelector("#emphasize").addEventListener("click", () => {
  communityNotice.classList.add("highlight");
});
document.querySelector("#dismiss").addEventListener("click", () => {
  communityNotice.hidden = true;
});
document.querySelector("#restore").addEventListener("click", () => {
  communityNotice.hidden = false;
});
