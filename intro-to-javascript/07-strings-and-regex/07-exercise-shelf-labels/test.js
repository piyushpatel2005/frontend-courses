test("Normalize shelf labels", () => {
  assert.match(OUTPUT, /^CHECK normalized: B\-07 \| C\-12$/m, "Expected this standalone Console line: CHECK normalized: B-07 | C-12");
});

test("Validate allowed rows and bays", () => {
  assert.match(OUTPUT, /^CHECK valid: true,true,true \| invalid: false,false,false,false,false,false$/m, "Expected this standalone Console line: CHECK valid: true,true,true | invalid: false,false,false,false,false,false");
});

test("Standalone label comparison", () => {
  assert.match(OUTPUT, /^B\-07: true \| D\-07: false$/m, "Expected this standalone Console line: B-07: true | D-07: false");
});
