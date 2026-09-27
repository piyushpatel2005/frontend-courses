// TODO 1: isValidEmail(email)
function isValidEmail(email) {
  return false;
}

// TODO 2: extractNumbers(text) - returns array of number strings
function extractNumbers(text) {
  return [];
}

// TODO 3: maskEmail(email) - hides all but first char of local part
function maskEmail(email) {
  return "";
}

// These supplied probes display the result of each function as you complete it.
console.log(`CHECK email: ${["alice@example.com", "bob@domain.org", "notanemail", "@domain.com"].map(isValidEmail).join(" | ")}`);
console.log(`CHECK numbers: ${extractNumbers("I have 3 cats and 12 dogs").join(",")} | none: ${extractNumbers("no numbers here").join(",")}`);
console.log(`CHECK mask: ${maskEmail("alice@example.com")} | ${maskEmail("bob@domain.org")}`);
// Log the final combined result after all three functions work.
