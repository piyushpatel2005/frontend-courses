class Stack {
  #items = [];

  push(item) { this.#items.push(item); }
  pop() { return this.#items.pop(); }
  peek() { return this.#items[this.#items.length - 1]; }
  get size() { return this.#items.length; }
  get isEmpty() { return this.#items.length === 0; }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.pop(); // removes 30
document.getElementById("output").textContent = `Stack size: ${stack.size} | top: ${stack.peek()}`;
