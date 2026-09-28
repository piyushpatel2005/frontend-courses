test("Single success callback", () => {
  assert.match(OUTPUT, /^CHECK reservation: no error \| reserved=2 \| remaining=3 \| calls=1$/m, "Expected this standalone Console line: CHECK reservation: no error | reserved=2 | remaining=3 | calls=1");
});

test("Single error callback for invalid requests", () => {
  assert.match(OUTPUT, /^CHECK errors: Invalid seat request,null,1 \| Invalid seat request,null,1 \| Invalid seat request,null,1 \| Invalid seat request,null,1$/m, "Expected this standalone Console line: CHECK errors: Invalid seat request,null,1 | Invalid seat request,null,1 | Invalid seat request,null,1 | Invalid seat request,null,1");
});

test("Standalone successful reservation", () => {
  assert.match(OUTPUT, /^Reserved 2 seats; 3 remain$/m, "Expected this standalone Console line: Reserved 2 seats; 3 remain");
});
