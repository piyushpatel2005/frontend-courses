test("intake form", () => {
  assert.count("form", 1, "Add one form");
});

test("crew contact", () => {
  assert.exists(document.querySelector('form input[type="text"]'), "Put the crew-contact text input in the form");
});

test("contact email", () => {
  assert.exists(document.querySelector('form input[type="email"]'), "Put an email input in the form");
});

test("training code", () => {
  assert.exists(document.querySelector('form input[type="password"]'), "Put a password input in the form");
});

test("submit action", () => {
  assert.exists(document.querySelector('form button[type="submit"], form input[type="submit"]'), "Put a submit control in the form");
});

test("each field has a matching visible label", () => {
  const inputs = Array.from(document.querySelectorAll('form input[type="text"], form input[type="email"], form input[type="password"]'));
  assert.equal(inputs.length, 3, "First add the three intake fields");
  assert.equal(inputs.every(input => input.id && Array.from(document.querySelectorAll('form label[for]')).some(label => label.htmlFor === input.id && label.textContent.trim())), true, "Connect a visible label to each field");
});
