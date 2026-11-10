function hasLabel(control) {
  return !!control && !!control.id && document.querySelectorAll('[id]').length > 0 &&
    Array.from(document.querySelectorAll('[id]')).filter(el => el.id === control.id).length === 1 &&
    Array.from(control.labels || []).some(label => label.control === control && label.textContent.trim());
}
function enabled(control) { return !!control && !control.matches(':disabled'); }
function explicitLabel(control) { return hasLabel(control) && Array.from(control.labels).some(label => label.htmlFor === control.id && label.textContent.trim()); }
test("check-in form", () => {
  assert.equal(document.querySelectorAll("form").length, 1, "Add one check-in form");
});
test("operator-name input", () => {
  const input = document.querySelector('form input[type="text"][name="operator-name"]');
  assert.equal(enabled(input), true, "Add the named, enabled text input inside the form");
});
test("backup-email input", () => {
  const input = document.querySelector('form input[type="email"][name="backup-email"]');
  assert.equal(enabled(input), true, "Add the named, enabled email input inside the form");
});
test("access-phrase input", () => {
  const input = document.querySelector('form input[type="password"][name="access-phrase"]');
  assert.equal(enabled(input), true, "Add the named, enabled password input inside the form");
});
test("submit action", () => {
  const button = document.querySelector('form button[type="submit"], form input[type="submit"]');
  assert.equal(enabled(button), true, "Add an enabled submit button");
  assert.exists((button.textContent || button.value).trim(), "Give the submit button action text");
});
test("operator name label", () => {
  assert.equal(explicitLabel(document.querySelector('form input[type="text"]')), true, "Connect the operator name label with for and a unique id");
});
test("backup email label", () => {
  assert.equal(explicitLabel(document.querySelector('form input[type="email"]')), true, "Connect the backup email label with for and a unique id");
});
test("access phrase label", () => {
  assert.equal(explicitLabel(document.querySelector('form input[type="password"]')), true, "Connect the access phrase label with for and a unique id");
});
