test("Basic email shape", () => {
  assert.match(OUTPUT, /^CHECK email: true \| true \| false \| false$/m, "Expected this standalone Console line: CHECK email: true | true | false | false");
});

test("Number extraction including empty input", () => {
  assert.match(OUTPUT, /^CHECK numbers: 3,12 \| none: $/m, "Expected this standalone Console line: CHECK numbers: 3,12 | none: ");
});

test("Mask local part of valid addresses", () => {
  assert.match(OUTPUT, /^CHECK mask: a\*\*\*\*@example\.com \| b\*\*@domain\.org$/m, "Expected this standalone Console line: CHECK mask: a****@example.com | b**@domain.org");
});

test("Standalone regex summary", () => {
  assert.match(OUTPUT, /^valid: true \| numbers: 3,12 \| masked: a\*\*\*\*@example\.com$/m, "Expected this standalone Console line: valid: true | numbers: 3,12 | masked: a****@example.com");
});
