function makeBook(title) {
  const book = document.createElement("li");
  book.textContent = title;
  return book;
}
document.querySelector("#books").append(makeBook("The Hobbit"));
window.makeBook = makeBook;
