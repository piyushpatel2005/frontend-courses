function hasLabel(control) {
  return !!control && !!control.id && document.querySelectorAll('[id]').length > 0 &&
    Array.from(document.querySelectorAll('[id]')).filter(el => el.id === control.id).length === 1 &&
    Array.from(control.labels || []).some(label => label.control === control && label.textContent.trim());
}
function enabled(control) { return !!control && !control.matches(':disabled'); }
function explicitLabel(control) { return hasLabel(control) && Array.from(control.labels).some(label => label.htmlFor === control.id && label.textContent.trim()); }
test("post form", () => {
  const form = document.querySelector('body > form');
  assert.exists(form, "Add a form below the heading");
  assert.equal(form.method, 'post', "Set method=post");
});
test("name field", () => {
  const control = document.querySelector('form input[type="text"][name="name"]');
  assert.equal(enabled(control), true, "Add the enabled name field with its name attribute");
});
test("email field", () => {
  const control = document.querySelector('form input[type="email"][name="email"]');
  assert.equal(enabled(control), true, "Add the enabled email field with its name attribute");
});
test("message field", () => {
  const control = document.querySelector('form textarea[name="message"]');
  assert.equal(enabled(control), true, "Add the enabled message field with its name attribute");
});
test("text required", () => {
  const input = document.querySelector('form input[type="text"]');
  assert.equal(enabled(input) && input.required, true, "Mark the text input required");
  const before = input.value;
  try { input.value = ''; assert.equal(input.validity.valueMissing, true, "An empty required field must be invalid"); }
  finally { input.value = before; }
});
test("email required", () => {
  const input = document.querySelector('form input[type="email"]');
  assert.equal(enabled(input) && input.required, true, "Mark the email input required");
  const before = input.value;
  try { input.value = ''; assert.equal(input.validity.valueMissing, true, "An empty required field must be invalid"); }
  finally { input.value = before; }
});
test("topic choices", () => {
  const select = document.querySelector('form select[name="topic"]');
  assert.equal(enabled(select), true, "Add the named Topic menu");
  const options = Array.from(select.options);
  assert.equal(options.length >= 3 && options.every(o => o.value.trim()) && new Set(options.map(o => o.value)).size === options.length, true, "Give topic options distinct non-empty values");
  assert.equal([/book/i, /volunteer/i, /access/i].every(pattern => options.some(o => pattern.test(o.textContent))), true, "Offer room booking, volunteering, and accessibility");
});
test("send button", () => {
  const button = document.querySelector('form button[type="submit"], form input[type="submit"]');
  assert.equal(enabled(button), true, "Add a submit button inside the form");
  assert.exists((button.textContent || button.value).trim(), "Give the button action text");
});
test("Name label", () => {
  assert.equal(explicitLabel(document.querySelector('form input[type="text"]')), true, "Connect the Name label with for and a unique id");
});
test("Email label", () => {
  assert.equal(explicitLabel(document.querySelector('form input[type="email"]')), true, "Connect the Email label with for and a unique id");
});
test("Message label", () => {
  assert.equal(explicitLabel(document.querySelector('form textarea')), true, "Connect the Message label with for and a unique id");
});
test("Topic label", () => {
  assert.equal(explicitLabel(document.querySelector('form select')), true, "Connect the Topic label with for and a unique id");
});
