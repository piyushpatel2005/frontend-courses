test("search explicitly uses GET", () => {
  const form = document.querySelector('form');
  assert.equal(form?.getAttribute('method')?.toLowerCase(), 'get', 'Write method="get" explicitly');
  assert.equal(form.getAttribute('action'), '/workshops', 'Keep the supplied workshop destination');
});
test("search answer has its submission key", () => {
  const input = document.querySelector('form input#workshop-query');
  assert.equal(input?.name, 'q', 'Give the search field name="q"');
  assert.equal(input.matches(':disabled'), false, 'Keep the answer enabled');
});
test("search requires three characters", () => {
  const input = document.querySelector('form input#workshop-query');
  assert.equal(Boolean(input?.required && input.minLength === 3 && !input.form.noValidate), true, 'Use required and minlength="3" without novalidate');
  const before = input.value;
  try { input.value = ''; assert.equal(input.validity.valueMissing, true, 'Reject an empty answer'); }
  finally { input.value = before; }
});
test("search button submits", () => {
  const button = document.querySelector('form button#search-action');
  assert.equal(button?.getAttribute('type')?.toLowerCase(), 'submit', 'Set type="submit" on Search workshops');
  assert.equal(button.formNoValidate || button.disabled, false, 'Keep submission and validation enabled');
});
test("reset button restores defaults", () => {
  const button = document.querySelector('form button#reset-action');
  assert.equal(button?.getAttribute('type')?.toLowerCase(), 'reset', 'Set type="reset" on Reset search');
  assert.equal(button.disabled, false, 'Keep the reset action enabled');
});
