function normalizeShelfLabel(input) {
  // Trim the input and make letters uppercase.
}

function isValidShelfLabel(input) {
  // Test the whole normalized label against the permitted rows and bays.
}

console.log(`CHECK normalized: ${normalizeShelfLabel(" b-07 ")} | ${normalizeShelfLabel(" c-12 ")}`);
console.log(`CHECK valid: ${["A-01", " b-07 ", "C-12"].map(isValidShelfLabel).join(",")} | invalid: ${["D-07", "A-00", "C-13", "A-1", "A-01extra", "xB-07"].map(isValidShelfLabel).join(",")}`);
// Log the final two-label comparison separately.
