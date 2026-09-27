// TODO: Implement Stack class with private #items
class Stack {
    #items = null;

    get initialized() { return Array.isArray(this.#items); }

    push(item) {

    }

    pop() {
        throw new Error("Implement pop");
    }

    peek() {

    }

    get size() {

    }

    get isEmpty() {

    }
}

// Checkpoints run in task order. Implement the methods above, then log the mission result.
console.log(`stack initialized: ${new Stack().initialized}`);
function tryPop(stack) { try { return stack.pop(); } catch { return "not implemented"; } }
console.log(`empty size: ${new Stack().size}`);
const pushCheck = new Stack();
pushCheck.push(10);
pushCheck.push(20);
console.log(`push size: ${pushCheck.size}`);
const popCheck = new Stack();
popCheck.push(10);
popCheck.push(20);
console.log(`popped: ${tryPop(popCheck)}, size: ${popCheck.size}`);
console.log(`empty pop: ${tryPop(new Stack())}`);
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
tryPop(stack);
// Log Stack size and top on one line here.
