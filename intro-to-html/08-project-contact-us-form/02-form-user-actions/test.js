function hasLabel(control) {
  return !!control && !!control.id && document.querySelectorAll('[id]').length > 0 &&
    Array.from(document.querySelectorAll('[id]')).filter(el => el.id === control.id).length === 1 &&
    Array.from(control.labels || []).some(label => label.control === control && label.textContent.trim());
}
function enabled(control) { return !!control && !control.matches(':disabled'); }
function explicitLabel(control) { return hasLabel(control) && Array.from(control.labels).some(label => label.htmlFor === control.id && label.textContent.trim()); }
function labeled(control) {
  return Array.from(control.labels || []).some(label => label.control === control && label.textContent.trim());
}
function choices(type) { return Array.from(document.querySelectorAll(`form input[type="${type}"]`)).filter(el => !el.matches(':disabled')); }
function distinctValues(items) { return items.every(el => el.getAttribute('value')?.trim()) && new Set(items.map(el => el.value)).size === items.length; }
test("two interests", () => {
  const interests = choices('checkbox').filter(i => i.name === 'interests' && !i.required);
  assert.equal(['booking','volunteering'].every(value => interests.some(i => i.value === value)), true, "Add optional booking and volunteering interest checkboxes");
});
test("optional phone", () => {
  const phone = document.querySelector('form input[type="tel"]');
  assert.equal(enabled(phone) && !!phone.name.trim() && !phone.required && labeled(phone), true, "Add a named optional phone input with a connected label");
});
test("two reply methods", () => {
  const inputs = choices('radio');
  assert.equal(inputs.length === 2 && ['email','phone'].every(value => inputs.some(i => i.value === value)), true, "Add exactly two reply radios with email and phone values");
});
test("one reply group", () => {
  const inputs = choices('radio');
  assert.equal(inputs.length === 2 && !!inputs[0].name.trim() && inputs.every(i => i.name === inputs[0].name && i.form === inputs[0].form), true, "Give reply radios one shared non-empty name");
  const before = inputs.map(i => i.checked);
  try { inputs[0].checked = true; inputs[1].checked = true; assert.equal(inputs[0].checked, false, "Only one reply method can remain selected"); }
  finally { inputs.forEach((i,n) => { i.checked = before[n]; }); }
});
test("explicit consent", () => {
  const consent = document.querySelector('form input[type="checkbox"][name="consent"][value="yes"]');
  assert.equal(enabled(consent) && consent.required, true, "Add the named, required consent checkbox with value=yes");
  assert.equal(consent.defaultChecked, false, "Leave consent unchecked initially");
  const before = consent.checked;
  try { consent.checked = false; assert.equal(consent.validity.valueMissing, true, "Require the visitor to choose consent"); }
  finally { consent.checked = before; }
});
test("interest labels", () => {
  const inputs = Array.from(document.querySelectorAll('form input[type="checkbox"][name="interests"]'));
  assert.equal(inputs.length === 2 && inputs.every(labeled), true, "Give every interest choice a visible connected label");
});
test("reply labels", () => {
  const inputs = Array.from(document.querySelectorAll('form input[type="radio"]'));
  assert.equal(inputs.length === 2 && inputs.every(labeled), true, "Give every reply choice a visible connected label");
});
test("consent labels", () => {
  const inputs = Array.from(document.querySelectorAll('form input[type="checkbox"][name="consent"]'));
  assert.equal(inputs.length === 1 && inputs.every(labeled), true, "Give every consent choice a visible connected label");
});
