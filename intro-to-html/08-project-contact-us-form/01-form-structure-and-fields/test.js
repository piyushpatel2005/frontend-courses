test("post form", () => {
  const form = document.querySelector("body > form");
  assert.exists(form, "Add a form below the heading");
  assert.equal(form.method.toLowerCase(), "post", "Use method=post");
});

test("name field", () => {
  assert.exists(document.querySelector('form input[type="text"]'), "Add a text input for Name inside the form");
});

test("email field", () => {
  assert.exists(document.querySelector('form input[type="email"]'), "Add an email input inside the form");
});

test("message field", () => {
  assert.exists(document.querySelector("form textarea"), "Add a Message textarea inside the form");
});

test("name is required", () => {
  assert.exists(document.querySelector('form input[type="text"][required]'), "Require a name");
});

test("email is required", () => {
  assert.exists(document.querySelector('form input[type="email"][required]'), "Require an email");
});

test("topic choices", () => {
  const select = document.querySelector("form select");
  assert.exists(select, "Add a Topic menu");
  const choices = Array.from(select.options).map(option => option.textContent.trim().toLowerCase());
  assert.equal(choices.length >= 3, true, "Add three topic choices");
  assert.equal([/book/, /volunteer/, /access/].every(pattern => choices.some(text => pattern.test(text))), true, "Offer room booking, volunteering, and accessibility topics");
});

test("submit button", () => {
  assert.exists(document.querySelector('form button[type="submit"], form input[type="submit"]'), "Put a submit button in the form");
});

test("all four fields have visible connected labels", () => {
  const controls = ['input[type="text"]', 'input[type="email"]', 'textarea', 'select'].map(selector => document.querySelector(`form ${selector}`));
  assert.equal(controls.every(Boolean), true, "Add the four form fields first");
  const labels = Array.from(document.querySelectorAll('form label[for]'));
  assert.equal(controls.every(control => control.id && labels.some(label => label.htmlFor === control.id && label.textContent.trim())), true, "Give each field a matching, visible label");
});
