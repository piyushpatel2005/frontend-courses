function normalizeShelfLabel(input) {
  return input.trim().toUpperCase();
}

function isValidShelfLabel(input) {
  return /^[A-C]-(0[1-9]|1[0-2])$/.test(normalizeShelfLabel(input));
}

console.log(`CHECK normalized: ${normalizeShelfLabel(" b-07 ")} | ${normalizeShelfLabel(" c-12 ")}`);
console.log(`CHECK valid: ${["A-01", " b-07 ", "C-12"].map(isValidShelfLabel).join(",")} | invalid: ${["D-07", "A-00", "C-13", "A-1", "A-01extra", "xB-07"].map(isValidShelfLabel).join(",")}`);
console.log(`B-07: ${isValidShelfLabel(" b-07 ")} | D-07: ${isValidShelfLabel("D-07")}`);
