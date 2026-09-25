test("push and pop update the queue", () => {
  assert.deepEqual(queue, ['first', 'second'], "queue should end with the original two items after push and pop");
  assert.equal(removedItem, 'third', "removedItem should store the popped value");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "first,second | third", "Log the mission result with console.log()");
});
