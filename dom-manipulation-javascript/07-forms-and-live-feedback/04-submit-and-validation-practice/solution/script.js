const request = document.querySelector("#request");
const book = document.querySelector("#book");
const status = document.querySelector("#request-status");
request.addEventListener("submit", event => {
  event.preventDefault();
  const title = book.value.trim();
  if (!title) {
    status.textContent = "Enter a book title before requesting a hold.";
    book.setAttribute("aria-invalid", "true");
    book.focus();
    return;
  }
  status.textContent = `Hold requested for ${title}.`;
  book.removeAttribute("aria-invalid");
});
