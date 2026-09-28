// Implement the classes; the probes below log each behavior in task order.
class LibraryItem {
  #checkedOut = false;
  constructor(title) {
    // Store the title.
  }
  get available() {
    // Read the private status.
  }
  checkout() {
    // Return false if already on loan, otherwise mark it on loan.
  }
  returnItem() {
    // Return false if already available, otherwise restore it.
  }
}
class Book extends LibraryItem {
  constructor(title, author) {
    super(title);
    // Store the author.
  }
  describe() {
    // Return "Title by Author — available" or "Title by Author — on loan".
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
