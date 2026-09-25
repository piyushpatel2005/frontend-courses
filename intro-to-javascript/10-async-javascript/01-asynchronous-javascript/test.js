test("messageOrder stores the async sequence", () => {
  assert.deepEqual(messageOrder, ['Start', 'End', 'Delayed'], "messageOrder should show the async order");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "Start | End | Delayed", "Log the mission result with console.log()");
});
