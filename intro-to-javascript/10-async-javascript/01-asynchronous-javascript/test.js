test("messageOrder stores the async sequence", () => {
  assert.deepEqual(messageOrder, ['Start', 'End', 'Delayed'], "messageOrder should show the async order");
});

test("#output shows the async summary", () => {
  const out = document.getElementById("output");
  assert.exists(out);
  assert.equal(out.textContent.trim(), 'Start | End | Delayed', "#output should show the async order");
});
