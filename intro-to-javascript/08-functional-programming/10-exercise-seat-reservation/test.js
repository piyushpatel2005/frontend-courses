test("Success callback exactly once", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK success: 1: null,2,3 | 1: null,5,0"), true, "Expected checkpoint: CHECK success: 1: null,2,3 | 1: null,5,0");
});

test("Error callback exactly once", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK invalid: 1: Invalid seat request,null | 1: Invalid seat request,null | 1: Invalid seat request,null | 1: Invalid seat request,null"), true, "Expected checkpoint: CHECK invalid: 1: Invalid seat request,null | 1: Invalid seat request,null | 1: Invalid seat request,null | 1: Invalid seat request,null");
});

test("Reservation message", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("Reserved 2 seats; 3 remain"), true, "Expected checkpoint: Reserved 2 seats; 3 remain");
});
