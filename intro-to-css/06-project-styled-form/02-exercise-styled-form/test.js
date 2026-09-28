test('Give the input space before the submit button', () => {
  assert.equal(['12px', '0.75rem'].includes(getComputedStyle(document.querySelector('input')).marginBottom), true, 'Set margin-bottom: .75rem on input.');
});

test('Focused input shows a visible orange outline', () => {
  const input = document.querySelector('input');
  input.focus();
  assert.equal(document.activeElement, input, 'The input must accept focus.');
  const rules = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules || []));
  assert.equal(rules.some(rule => rule.selectorText === 'input:focus' && ['3px solid #f4a261', '3px solid rgb(244, 162, 97)'].includes(rule.style.getPropertyValue('outline'))), true, 'Set input:focus outline to 3px solid #f4a261.');
});
