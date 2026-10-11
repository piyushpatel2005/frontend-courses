class Stack {
  #items = [];
  get initialized() { return Array.isArray(this.#items); }
  get size() { return this.#items.length; }
  push(item) { this.#items.push(item); }
  pop() { return this.#items.pop(); }
  peek() { return this.#items[this.#items.length - 1]; }
  get isEmpty() { return this.#items.length === 0; }
}
// Supplied setup for the final output.
const stack = new Stack();
stack.push(10); stack.push(20);
console.log(`Stack size: ${stack.size} | top: ${stack.peek()}`);

// Supplied checkpoints. Do not replace them with fixed answers.
console.log(`CHECK initialized: ${new Stack().initialized}`);
console.log(`CHECK size: ${new Stack().size}`);
const pushed = new Stack(); pushed.push(10); pushed.push(20);
console.log(`CHECK push: ${pushed.size}`);
console.log(`CHECK pop: ${pushed.pop()} | remaining: ${pushed.size} | empty: ${new Stack().pop()}`);
const peeked = new Stack(); peeked.push(5); peeked.push(15);
console.log(`CHECK peek: ${peeked.peek()} | size: ${peeked.size} | empty: ${new Stack().peek()}`);
const empty = new Stack(); const before = empty.isEmpty; empty.push(1);
console.log(`CHECK empty: ${before},${empty.isEmpty}`);
