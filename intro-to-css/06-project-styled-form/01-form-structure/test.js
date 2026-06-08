test("form has required input controls", () => {
  const form = document.querySelector("form.contact-form");
  assert.exists(form, 'Add <form class="contact-form">');
  assert.exists(form.querySelector('input[type="text"]'), "Add a text input");
  assert.exists(form.querySelector('input[type="email"]'), "Add an email input");
  assert.exists(form.querySelector("select"), "Add a select field");
  assert.exists(form.querySelector("textarea"), "Add a textarea field");
});

test("form has a submit button", () => {
  const form = document.querySelector("form.contact-form");
  assert.exists(form, "Form should exist");
  assert.exists(form.querySelector('button[type="submit"], input[type="submit"]'), "Add a submit control");
});

test("all controls have labels", () => {
  const form = document.querySelector("form.contact-form");
  assert.exists(form, "Form should exist");
  const labels = form.querySelectorAll("label");
  assert.isAtLeast(labels.length, 4, "Add a label for each form control");
});
