function contactValue(kind) {
  const items = Array.from(document.querySelectorAll('.card .contact li'));
  const item = items.find(li => kind.test(li.querySelector('span')?.textContent || ''));
  return item?.querySelectorAll('span')[1]?.textContent.trim() || '';
}
function actionLinks() { return Array.from(document.querySelectorAll('.card nav a:not(.contact-invitation)')); }
test("email matches card", () => {
  const email = contactValue(/email/i);
  assert.exists(email, "Keep an Email label and address in the contact list");
  const link = actionLinks().find(a => a.getAttribute('href')?.toLowerCase() === 'mailto:' + email.toLowerCase());
  assert.exists(link, "Link to the email shown on the card");
  assert.exists(link.textContent.trim(), "Name the email action");
});
test("phone matches card", () => {
  const phone = contactValue(/phone/i).replace(/[^0-9]/g, '');
  assert.exists(phone, "Keep a Phone label and number in the contact list");
  const link = actionLinks().find(a => /^tel:\+?[0-9]+$/.test(a.getAttribute('href') || '') && a.getAttribute('href').replace(/[^0-9]/g, '') === phone);
  assert.exists(link, "Use tel: with the card's phone digits, optionally starting with +");
  assert.exists(link.textContent.trim(), "Name the phone action");
});
test("portfolio in a new tab", () => {
  const link = actionLinks().find(a => a.target === '_blank' && /^https:\/\/[^\s]+$/.test(a.getAttribute('href') || ''));
  assert.exists(link, "Add an HTTPS portfolio link with target=_blank");
  assert.exists(link.textContent.trim(), "Name the portfolio destination");
  assert.equal(link.relList.contains('noopener') && link.relList.contains('noreferrer'), true, "Add both noopener and noreferrer rel tokens");
});
test("contact invitation", () => {
  const link = document.querySelector('.card nav a.contact-invitation');
  assert.exists(link, "Add a contact-invitation link");
  assert.equal(link.textContent.trim().split(/\s+/).length >= 2, true, "Use a descriptive invitation of at least two words");
  assert.equal(/^(mailto:[^\s@]+@[^\s@]+|tel:\+?[0-9]+|https:\/\/[^\s]+)$/.test(link.getAttribute('href') || ''), true, "Give the invitation a mailto, tel, or HTTPS destination, not #");
});
