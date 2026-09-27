class Stack {
  #items = [];
  get initialized() { return Array.isArray(this.#items); }

  push(item) { this.#items.push(item); }
  pop() { return this.#items.pop(); }
  peek() { return this.#items[this.#items.length - 1]; }
  get size() { return this.#items.length; }
  get isEmpty() { return this.#items.length === 0; }
}

// Each checkpoint follows the corresponding task.
console.log(`stack initialized: ${new Stack().initialized}`);
console.log(`empty size: ${new Stack().size}`);
const pushCheck = new Stack();
pushCheck.push(10);
pushCheck.push(20);
console.log(`push size: ${pushCheck.size}`);
const popCheck = new Stack();
popCheck.push(10);
popCheck.push(20);
console.log(`popped: ${popCheck.pop()}, size: ${popCheck.size}`);
console.log(`empty pop: ${new Stack().pop()}`);
const peekCheck = new Stack();
peekCheck.push(5);
peekCheck.push(15);
console.log(`peek: ${peekCheck.peek()}, size: ${peekCheck.size}`);
const emptyCheck = new Stack();
const wasEmpty = emptyCheck.isEmpty;
emptyCheck.push(1);
console.log(`empty states: ${wasEmpty}, ${emptyCheck.isEmpty}`);
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
console.log(`Stack size: ${stack.size} | top: ${stack.peek()}`);
