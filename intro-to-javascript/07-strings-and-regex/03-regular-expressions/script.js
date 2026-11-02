// Task 1: Basic email shape

// TODO: Step 1: Complete task 1 for isValidEmail(email).
function isValidEmail(email) {
  return false;
}

// Supplied check 1: leave this code in place.

try {
  console.log("CHECK 1: " + (["alice@example.com","bob@domain.org","notanemail","@domain.com","a@b","a b@c.test","a@@b.test","a@b.test\n"].map(isValidEmail).join(",")));
} catch (error) {
  console.log("CHECK 1: pending");
}

// Task 2: Digit sequences and no-match inputs

// TODO: Step 2: Complete task 2 for extractNumbers(text).
function extractNumbers(text) {
  return [];
}

// Supplied check 2: leave this code in place.

try {
  console.log("CHECK 2: " + (`${extractNumbers("I have 3 cats and 12 dogs").join(",")} | ${extractNumbers("A007 B42").join(",")} | none:${Array.isArray(extractNumbers("none"))}/${extractNumbers("none").length} | empty:${extractNumbers("").length}`));
} catch (error) {
  console.log("CHECK 2: pending");
}

// Task 3: Mask local parts of different lengths

// TODO: Step 3: Complete task 3 for maskEmail(email).
function maskEmail(email) {
  return "";
}

// Supplied check 3: leave this code in place.

try {
  console.log("CHECK 3: " + (["alice@example.com","bob@domain.org","a@b.test"].map(maskEmail).join(" | ")));
} catch (error) {
  console.log("CHECK 3: pending");
}

// Task 4: Separate regex summary

// Log the combined result here.

// TODO: Step 4: Complete task 4 for "alice@example.com".
