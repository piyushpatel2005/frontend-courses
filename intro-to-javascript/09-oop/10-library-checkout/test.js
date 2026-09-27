test('LibraryItem stores its title', () => {
  assert.includes(OUTPUT, 'item title: River Atlas', 'Store the title in the constructor');
});

test('New library item starts available', () => {
  assert.includes(OUTPUT, 'new item available: true', 'Log new item available: true');
});

test('Book inherits LibraryItem', () => {
  assert.includes(OUTPUT, 'book inherits LibraryItem: true', 'Book should inherit LibraryItem');
  assert.includes(OUTPUT, 'book author: N. Vale', 'Store the author in the Book constructor');
});

test('Checkout changes availability', () => {
  assert.includes(OUTPUT, 'checkout: true, available: false', "Log checkout: true, available: false in the Console");
});

test('Repeated checkout is rejected', () => {
  assert.includes(OUTPUT, 'repeat checkout: false, available: false', "Log repeat checkout: false, available: false in the Console");
});

test('Return restores availability', () => {
  assert.includes(OUTPUT, 'return: true, available: true', 'Log return: true, available: true');
});

test('Repeated return is rejected', () => {
  assert.includes(OUTPUT, 'repeat return: false', 'Log repeat return: false');
});

test('Book describes its availability', () => {
  assert.includes(OUTPUT, 'book description: River Atlas by N. Vale — available', 'Log the description after returning the book');
});
