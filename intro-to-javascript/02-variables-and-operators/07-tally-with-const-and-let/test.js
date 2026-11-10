test("Two shifts add 12 points", () => {
  assert.match(OUTPUT, /^after shifts: 20$/m, "After two 6-point shifts, log after shifts: 20");
});

test("Correction removes 3 points", () => {
  assert.match(OUTPUT, /^corrected: 17$/m, "After the correction, log corrected: 17");
});
