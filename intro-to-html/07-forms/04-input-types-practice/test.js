function hasLabel(control) {
  return !!control && !!control.id && document.querySelectorAll('[id]').length > 0 &&
    Array.from(document.querySelectorAll('[id]')).filter(el => el.id === control.id).length === 1 &&
    Array.from(control.labels || []).some(label => label.control === control && label.textContent.trim());
}
function enabled(control) { return !!control && !control.matches(':disabled'); }
function explicitLabel(control) { return hasLabel(control) && Array.from(control.labels).some(label => label.htmlFor === control.id && label.textContent.trim()); }
test("text field", () => {
  const input = document.querySelector('form input[type="text"][id="technician"]');
  assert.equal(enabled(input) && hasLabel(input) && !!input.name.trim(), true, "Add a named text input connected to the supplied label");
});
test("email field", () => {
  const input = document.querySelector('form input[type="email"][id="backup"]');
  assert.equal(enabled(input) && hasLabel(input) && !!input.name.trim(), true, "Add a named email input connected to the supplied label");
});
test("number field", () => {
  const input = document.querySelector('form input[type="number"][id="battery"]');
  assert.equal(enabled(input) && hasLabel(input) && !!input.name.trim(), true, "Add a named number input connected to the supplied label");
  assert.equal(input.min, "1", "Set min=1");
  assert.equal(input.max, "100", "Set max=100");
  assert.equal(input.step, "1", "Set step=1");
  const before = input.value;
  try {
    input.value = '0'; assert.equal(input.validity.rangeUnderflow, true, "Reject battery levels below 1");
    input.value = '101'; assert.equal(input.validity.rangeOverflow, true, "Reject battery levels above 100");
    input.value = '50.5'; assert.equal(input.validity.stepMismatch, true, "Use whole-number battery levels");
    input.value = '50'; assert.equal(input.checkValidity(), true, "Allow a whole-number battery level");
  } finally { input.value = before; }
});
test("date field", () => {
  const input = document.querySelector('form input[type="date"][id="service"]');
  assert.equal(enabled(input) && hasLabel(input) && !!input.name.trim(), true, "Add a named date input connected to the supplied label");
});
test("color field", () => {
  const input = document.querySelector('form input[type="color"][id="beacon-light"]');
  assert.equal(enabled(input) && hasLabel(input) && !!input.name.trim(), true, "Add a named color input connected to the supplied label");
});
test("save button", () => {
  const button = document.querySelector('form button[type="submit"], form input[type="submit"]');
  assert.equal(enabled(button), true, "Add a submit button inside the form");
  assert.exists((button.textContent || button.value).trim(), "Give the button action text");
});
