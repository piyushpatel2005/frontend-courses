test("push adds an item to the queue", () => {
  assert.match(OUTPUT, /^CHECK 1: first,second,third$/m, "Log CHECK 1 after push");
});
test("pop removes the last item", () => {
  assert.match(OUTPUT, /^CHECK 2: first,second \| third$/m, "Log CHECK 2 after pop");
});

test("logs the mission result", () => {
  assert.match(OUTPUT, /^first,second \| third$/m, "Log first,second | third on its own line");
});
