const request = document.querySelector("#request");
const book = document.querySelector("#book");
const status = document.querySelector("#request-status");
request.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = book.value.trim();
  if (!title) {
    book.setAttribute("aria-invalid", "true");
    status.textContent = "Enter a book title before requesting a hold.";
    book.focus();
    return;
  }
  book.removeAttribute("aria-invalid");
  status.textContent = `Hold requested for ${title}.`;
});