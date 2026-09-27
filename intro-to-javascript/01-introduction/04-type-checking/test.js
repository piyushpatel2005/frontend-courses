test("Step 1: messageType: string", () => {
  assert.match(OUTPUT, /^messageType:\ string$/m, "Log messageType: string as a complete Console line");
});

test("Step 2: isList: true", () => {
  assert.match(OUTPUT, /^isList:\ true$/m, "Log isList: true as a complete Console line");
});

test("Step 3: string | true", () => {
  assert.match(OUTPUT, /^string\ \|\ true$/m, "Log string | true as a complete Console line");
});
