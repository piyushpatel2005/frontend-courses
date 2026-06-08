test("push and pop update the queue", () => {
  assert.deepEqual(queue, ['first', 'second'], "queue should end with the original two items after push and pop");
  assert.equal(removedItem, 'third', "removedItem should store the popped value");
});

test("#output shows the remaining queue and removed item", () => {
  const out = document.getElementById("output");
  assert.exists(out);
  assert.equal(out.textContent.trim(), 'first,second | third', "#output should show the queue and removed item");
});
