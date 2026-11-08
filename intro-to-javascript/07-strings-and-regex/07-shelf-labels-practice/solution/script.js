// Task 1: Trim and uppercase labels

function normalizeShelfLabel(input) {
  return input.trim().toUpperCase();
}

// Supplied check 1: leave this code in place.

try {
  console.log("CHECK 1: " + (`${normalizeShelfLabel(" b-07 ")} | ${normalizeShelfLabel(" c-12 ")} | ${normalizeShelfLabel(" b -07 ")}`));
} catch (error) {
  console.log("CHECK 1: pending");
}

// Task 2: Rows, bay boundaries, and whole input

function isValidShelfLabel(input) {
  return /^[A-C]-(0[1-9]|1[0-2])$/.test(normalizeShelfLabel(input));
}

// Supplied check 2: leave this code in place.

try {
  console.log("CHECK 2: " + (`${["A-01"," b-07 ","C-12","A-01"].map(isValidShelfLabel).join(",")} | ${["D-07","A-00","C-13","A-1","A-01extra","xB-07","B -07", ""].map(isValidShelfLabel).join(",")}`));
} catch (error) {
  console.log("CHECK 2: pending");
}

// Task 3: Separate label comparison

console.log(`B-07: ${isValidShelfLabel(" b-07 ")} | D-07: ${isValidShelfLabel("D-07")}`);
