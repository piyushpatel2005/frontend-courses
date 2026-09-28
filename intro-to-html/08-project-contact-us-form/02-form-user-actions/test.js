test("room and volunteer interests", () => {
  const interest = Array.from(document.querySelectorAll('form input[type="checkbox"]')).filter(input => !input.required);
  assert.equal(interest.length >= 2, true, "Add two optional interest checkboxes");
  assert.equal([/book/, /volunteer/].every(pattern => interest.some(input => pattern.test(input.value) || pattern.test(input.labels?.[0]?.textContent || ""))), true, "Include booking and volunteering interests");
});

test("labeled optional phone number", () => {
  const phone = document.querySelector('form input[type="tel"][name]');
  assert.exists(phone, "Add a named optional phone field for call backs");
  assert.equal(phone.required, false, "Phone is optional");
  assert.equal(Array.from(phone.labels || []).some(label => label.textContent.trim()), true, "Give the phone field a visible label");
});

test("email and phone reply choices", () => {
  const radios = Array.from(document.querySelectorAll('form input[type="radio"]'));
  assert.equal(radios.length >= 2, true, "Add two reply-method radio buttons");
  assert.equal([/email/, /phone/].every(pattern => radios.some(input => pattern.test(input.value) || pattern.test(input.labels?.[0]?.textContent || ""))), true, "Offer email and phone reply methods");
});

test("one named reply group", () => {
  const radios = Array.from(document.querySelectorAll('form input[type="radio"]'));
  assert.equal(radios.length >= 2, true, "Add reply choices first");
  assert.equal(radios[0].name !== "" && radios.every(radio => radio.name === radios[0].name), true, "Give both radios the same non-empty name");
});

test("required consent", () => {
  const consent = document.querySelector('form input[type="checkbox"][required]');
  assert.exists(consent, "Add a separate required consent checkbox");
});

test("every new choice has a visible label", () => {
  const controls = Array.from(document.querySelectorAll('form input[type="checkbox"], form input[type="radio"]'));
  assert.equal(controls.length >= 5, true, "Add two interests, two reply methods, and consent first");
  assert.equal(controls.every(input => Array.from(input.labels || []).some(label => label.textContent.trim())), true, "Give each checkbox and radio a visible label");
});
