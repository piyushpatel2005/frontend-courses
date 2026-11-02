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
test("practice destination", () => {
  const form = document.querySelector('form[action]');
  assert.exists(form, "Add a form with a practice action");
  assert.equal(form.getAttribute('method')?.toLowerCase(), 'post', 'Use POST for the practice beacon request');
  const action = form.getAttribute('action').trim();
  assert.equal(/^(\/(?!\/)[^\s]+|https:\/\/[^\s]+)$/.test(action), true, "Use a practice path such as /emergency-beacon or an HTTPS URL");
});
test("labeled contact email", () => {
  const input = document.querySelector('form input[type="email"]');
  assert.equal(enabled(input) && explicitLabel(input) && !!input.name.trim(), true, "Put a named email input and its connected visible label in the form");
});
test("response channel group", () => {
  const inputs = choices('radio');
  assert.equal(inputs.length >= 2 && !!inputs[0].name.trim() && inputs.every(i => i.name === inputs[0].name && i.form === inputs[0].form && labeled(i)) && distinctValues(inputs), true, "Add labeled channels with distinct values and one shared name inside the form");
  const group = inputs[0]?.closest('fieldset');
  assert.equal(Boolean(group && group.firstElementChild?.tagName === 'LEGEND' && group.firstElementChild.textContent.trim() && inputs.every(i => i.closest('fieldset') === group)), true, 'Give the response decision its own fieldset and first-child legend');
});
test("send button", () => {
  const button = document.querySelector('form button[type="submit"], form input[type="submit"]');
  assert.equal(enabled(button), true, "Add a submit button inside the form");
  assert.exists((button.textContent || button.value).trim(), "Give the button action text");
});
