test("Stack is a class", () => {
  const s = new Stack();
  assert.ok(s instanceof Stack, "Stack should be a class");
});

test("push adds items and size updates", () => {
  const s = new Stack();
  s.push(10);
  s.push(20);
  assert.equal(s.size, 2, "After 2 pushes, size should be 2");
});

test("pop removes and returns the top item", () => {
  const s = new Stack();
  s.push(10);
  s.push(20);
  const top = s.pop();
  assert.equal(top, 20, "pop() should return 20 (the last pushed item)");
  assert.equal(s.size, 1, "After pop, size should be 1");
});

test("pop on empty stack returns undefined", () => {
  const s = new Stack();
  assert.equal(s.pop(), undefined, "pop on empty stack should return undefined");
});

test("peek returns top without removing", () => {
  const s = new Stack();
  s.push(5);
  s.push(15);
  assert.equal(s.peek(), 15, "peek() should return 15");
  assert.equal(s.size, 2, "peek should not remove the item");
});

test("isEmpty works correctly", () => {
  const s = new Stack();
  assert.equal(s.isEmpty, true, "New stack should be empty");
  s.push(1);
  assert.equal(s.isEmpty, false, "Stack with items should not be empty");
});

test("#output shows correct stack state", () => {
  var out = document.getElementById("output");
  assert.exists(out, "Keep the <p id=\"output\"> element");
  assert.equal(out.textContent.trim(), "Stack size: 2 | top: 20",
    '#output should show "Stack size: 2 | top: 20"');
});
