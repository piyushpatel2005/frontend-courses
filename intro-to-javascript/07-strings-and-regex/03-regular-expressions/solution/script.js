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

document.getElementById("output").textContent =
  `valid: ${isValidEmail("alice@example.com")} | numbers: ${extractNumbers("I have 3 cats and 12 dogs").join(",")} | masked: ${maskEmail("alice@example.com")}`;
