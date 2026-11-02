test("schedule stays in the current folder", () => {
  assert.equal(document.querySelector('#schedule-link')?.getAttribute('href'), 'schedule.html', 'Use schedule.html for the sibling page');
});
test("home goes up one folder", () => {
  assert.equal(document.querySelector('#home-link')?.getAttribute('href'), '../index.html', 'Use ../index.html to reach the parent folder');
});
test("contact begins at the site root", () => {
  assert.equal(document.querySelector('#contact-link')?.getAttribute('href'), '/contact.html', 'Begin the contact path with /');
});
