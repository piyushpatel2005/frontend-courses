const bookCard = document.querySelector("#book-card");
const favouriteStatus = document.querySelector("#favourite-status");
document.querySelector("#favourite").addEventListener("click", () => {
  bookCard.classList.add("active");
  favouriteStatus.textContent = `Favourite: ${bookCard.classList.contains("active") ? "yes" : "no"}`;
});
document.querySelector("#unfavourite").addEventListener("click", () => {
  bookCard.classList.remove("active");
  favouriteStatus.textContent = `Favourite: ${bookCard.classList.contains("active") ? "yes" : "no"}`;
});
