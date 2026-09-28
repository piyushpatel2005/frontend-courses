test("hover state darkens the reserve button", () => {
  const rules = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules || []));
  assert.equal(rules.some(rule => rule.selectorText === '.reserve-button:hover' && ['#d97706', 'rgb(217, 119, 6)'].includes(rule.style.getPropertyValue('background-color') || rule.style.getPropertyValue('background'))), true, 'Use .reserve-button:hover with background-color: #d97706.');
});

test("first reading-list item is bold", () => {
  assert.equal(getComputedStyle(document.querySelector(".reading-list li")).fontWeight, "700", "Use .reading-list li:first-child with font-weight: 700.");
});

test("focused email field has a cyan outline", () => {
  const email = document.querySelector('.email');
  email.focus();
  assert.equal(document.activeElement, email, 'The email field must be focusable.');
  const rules = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules || []));
  assert.equal(rules.some(rule => rule.selectorText === '.email:focus' && ['3px solid #67e8f9', '3px solid rgb(103, 232, 249)'].includes(rule.style.getPropertyValue('outline'))), true, 'Use .email:focus with outline: 3px solid #67e8f9.');
});
