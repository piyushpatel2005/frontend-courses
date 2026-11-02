class Stack {
  // TODO: Step 1: Initialize private #items to an empty array.
#items = null;
  get initialized() { return Array.isArray(this.#items); }
  // TODO: Step 2: Return the number of stored items from the size getter.
get size() {  }
  // TODO: Step 3: Append the supplied item in push(item).
push(item) {  }
  // TODO: Step 4: Remove and return the last item in pop(); return undefined on an empty stack.
pop() { return "not implemented"; }
  // TODO: Step 5: Return the last item without removing it from peek().
peek() {  }
  // TODO: Step 6: Return whether the stack has zero items from the isEmpty getter.
get isEmpty() {  }
}
// Supplied setup for the final output.
const stack = new Stack();
stack.push(10); stack.push(20);


// Supplied checkpoints. Do not replace them with fixed answers.
// TODO: Step 7: Log the supplied stack state as Stack size: 2 | top: 20.
console.log(`CHECK initialized: ${new Stack().initialized}`);
console.log(`CHECK size: ${new Stack().size}`);
const pushed = new Stack(); pushed.push(10); pushed.push(20);
console.log(`CHECK push: ${pushed.size}`);
console.log(`CHECK pop: ${pushed.pop()} | remaining: ${pushed.size} | empty: ${new Stack().pop()}`);
const peeked = new Stack(); peeked.push(5); peeked.push(15);
console.log(`CHECK peek: ${peeked.peek()} | size: ${peeked.size} | empty: ${new Stack().peek()}`);
const empty = new Stack(); const before = empty.isEmpty; empty.push(1);
console.log(`CHECK empty: ${before},${empty.isEmpty}`);
