test("forEach builds the number labels", () => {
  assert.match(OUTPUT, /^CHECK\ 1:\ Number:\ 1,\ Number:\ 2,\ Number:\ 3$/m, "Log CHECK 1: Number: 1, Number: 2, Number: 3 as a separate checkpoint line");
});

test("logs the mission result", () => {
  assert.match(OUTPUT, /^Number:\ 1,\ Number:\ 2,\ Number:\ 3\ \|\ \[2,4,6\]$/m, "Log the mission result with console.log()");
});
