class LibraryItem {
  #checkedOut = false;
  // TODO: Step 1: Store title in the LibraryItem constructor.
constructor(title) {  }
  // TODO: Step 2: Return the opposite of private #checkedOut from the available getter.
get available() {  }
  // TODO: Step 4: Complete task 4 for checkout().
checkout() {  }
  // TODO: Step 5: Complete task 5 for returnItem().
returnItem() {  }
}
class Book extends LibraryItem {
  // TODO: Step 3: Store author in Book after the supplied super(title) call.
constructor(title,author) { super(title);  }
  // TODO: Step 6: Complete task 6 for Book.describe().
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
