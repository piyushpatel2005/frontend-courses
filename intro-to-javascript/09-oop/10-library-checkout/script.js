class LibraryItem {
  #checkedOut = false;
  constructor(title) {  }
  get available() {  }
  checkout() {  }
  returnItem() {  }
}
class Book extends LibraryItem {
  constructor(title,author) { super(title);  }
  describe() {  }
}

// Supplied checkpoints. Do not replace them with fixed answers.
console.log(`CHECK title: ${new LibraryItem("River Atlas").title}`);
console.log(`CHECK available: ${new LibraryItem("River Atlas").available}`);
const book = new Book("River Atlas","N. Vale");
console.log(`CHECK author: ${book.author} | inherits: ${book instanceof LibraryItem}`);
const first = book.checkout(); const afterFirst = book.available;
const second = book.checkout();
console.log(`CHECK checkout: ${first},${afterFirst} | repeat: ${second},${book.available}`);
console.log(`CHECK loan description: ${book.describe()}`);
const returned = book.returnItem(); const afterReturn = book.available;
console.log(`CHECK return: ${returned},${afterReturn} | repeat: ${book.returnItem()},${book.available}`);
console.log(`CHECK description: ${book.describe()}`);
