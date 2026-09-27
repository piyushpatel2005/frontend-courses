function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function extractNumbers(text) {
  return text.match(/\d+/g) || [];
}

function maskEmail(email) {
  const [local, domain] = email.split("@");
  const masked = local[0] + "*".repeat(local.length - 1);
  return `${masked}@${domain}`;
}

console.log(`CHECK email: ${["alice@example.com", "bob@domain.org", "notanemail", "@domain.com"].map(isValidEmail).join(" | ")}`);
console.log(`CHECK numbers: ${extractNumbers("I have 3 cats and 12 dogs").join(",")} | none: ${extractNumbers("no numbers here").join(",")}`);
console.log(`CHECK mask: ${maskEmail("alice@example.com")} | ${maskEmail("bob@domain.org")}`);
console.log(`valid: ${isValidEmail("alice@example.com")} | numbers: ${extractNumbers("I have 3 cats and 12 dogs").join(",")} | masked: ${maskEmail("alice@example.com")}`);
