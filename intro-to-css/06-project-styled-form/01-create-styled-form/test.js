test("form contains required controls", () => {
  const form = document.querySelector("form.contact-form");
  assert.exists(form, "Add <form class=\"contact-form\"> ");
  assert.exists(form.querySelector('input[type="text"]'), "Add a text input");
  assert.exists(form.querySelector('input[type="email"]'), "Add an email input");
  assert.exists(form.querySelector("select"), "Add a select field");
  assert.exists(form.querySelector("textarea"), "Add a textarea field");
  assert.exists(form.querySelector('button[type="submit"], input[type="submit"]'), "Add submit control");
});

test("form layout and focus styles exist", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.contact-form\s*\{[^}]*display\s*:\s*grid\s*;/i, "Set .contact-form display to grid");
  assert.match(css, /\.contact-form\s*\{[^}]*gap\s*:\s*12px\s*;/i, "Set .contact-form gap to 12px");
  assert.match(css, /input:focus[\s\S]*textarea:focus[\s\S]*select:focus|input:focus,\s*textarea:focus,\s*select:focus/i, "Add focus styles for input, textarea, and select");
});

test("user action: focus and submit works", () => {
  const form = document.querySelector("form.contact-form");
  const input = form?.querySelector('input[type="text"]');
  const submit = form?.querySelector('button[type="submit"], input[type="submit"]');
  assert.exists(form, "Form should exist");
  assert.exists(input, "Text input should exist");
  assert.exists(submit, "Submit control should exist");

  input.focus();
  assert.equal(document.activeElement, input, "User should be able to focus the input");

  let submitted = false;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitted = true;
  });
  submit.click();
  assert.isTrue(submitted, "Form should submit on user click");
});
