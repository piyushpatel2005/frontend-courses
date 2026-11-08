// Task 1: Trim and uppercase labels

// TODO: Step 1: Complete normalizeShelfLabel(input) by trimming and uppercasing the input string.
function normalizeShelfLabel(input) {
  // Return the normalized string.
}

// Supplied check 1: leave this code in place.

try {
  console.log("CHECK 1: " + (`${normalizeShelfLabel(" b-07 ")} | ${normalizeShelfLabel(" c-12 ")} | ${normalizeShelfLabel(" b -07 ")}`));
} catch (error) {
  console.log("CHECK 1: pending");
}

// Task 2: Rows, bay boundaries, and whole input

// TODO: Step 2: Complete task 2 for isValidShelfLabel(input).
function isValidShelfLabel(input) {
  // Return the validation result.
}

// Supplied check 2: leave this code in place.

try {
  console.log("CHECK 2: " + (`${["A-01"," b-07 ","C-12","A-01"].map(isValidShelfLabel).join(",")} | ${["D-07","A-00","C-13","A-1","A-01extra","xB-07","B -07", ""].map(isValidShelfLabel).join(",")}`));
} catch (error) {
  console.log("CHECK 2: pending");
}

// Task 3: Separate label comparison

// Log the comparison here.

// TODO: Step 3: Log a separate comparison for " b-07 " and "D-07": B-07: true | D-07: false.
