class LibraryItem {
  #checkedOut = false;
  constructor(title) { this.title = title; }
  get available() { return !this.#checkedOut; }
  checkout() {
    if (this.#checkedOut) return false;
    this.#checkedOut = true;
    return true;
  }
  returnItem() {
    if (!this.#checkedOut) return false;
    this.#checkedOut = false;
    return true;
  }
}
class Book extends LibraryItem {
  constructor(title, author) {
    super(title);
    this.author = author;
  }
  describe() {
    return `${this.title} by ${this.author} — ${this.available ? "available" : "on loan"}`;
  }
}
console.log(`item title: ${new LibraryItem("River Atlas").title}`);
console.log(`new item available: ${new LibraryItem("River Atlas").available}`);
const book = new Book("River Atlas", "N. Vale");
console.log(`book inherits LibraryItem: ${book instanceof LibraryItem}`);
console.log(`book author: ${book.author}`);
const firstCheckout = book.checkout();
console.log(`checkout: ${firstCheckout}, available: ${book.available}`);
const secondCheckout = book.checkout();
console.log(`repeat checkout: ${secondCheckout}, available: ${book.available}`);
const firstReturn = book.returnItem();
console.log(`return: ${firstReturn}, available: ${book.available}`);
console.log(`repeat return: ${book.returnItem()}`);
console.log(`book description: ${book.describe()}`);
