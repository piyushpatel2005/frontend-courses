test("form has a destination", () => {
  const form = document.querySelector("form[action]");
  assert.exists(form, "Add a form with a non-empty action attribute");
  assert.notEqual(form.getAttribute("action").trim(), "", "Give the form an action value");
});

test("email field has a connected label", () => {
  const email = document.querySelector('input[type="email"]');
  assert.exists(email, "Add an email input");
  assert.exists(email.id, "Give the email input an id");
  assert.exists(document.querySelector(`label[for="${email.id}"]`), "Add a label whose for value matches the email input id");
});

test("form has radio choices and a submit button", () => {
  const radios = document.querySelectorAll('input[type="radio"]');
  assert.equal(radios.length >= 2, true, "Add at least two radio inputs");
  assert.notEqual(radios[0].name, "", "Give the radio inputs a shared name");
  assert.equal(Array.from(radios).every((radio) => radio.name === radios[0].name), true, "Use the same name for both radio choices");
  assert.equal(Array.from(radios).every(radio => radio.labels && Array.from(radio.labels).some(label => label.textContent.trim())), true, "Label each response channel");
});

test("form can submit", () => {
  assert.exists(document.querySelector('form button[type="submit"], form input[type="submit"]'), "Put a submit button in the form");
});
