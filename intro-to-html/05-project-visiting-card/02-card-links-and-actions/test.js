test("email action matches card", () => {
  const link = document.querySelector('.card nav a[href="mailto:riya@example.com"]');
  assert.exists(link, "Link to the card's email address from the nav");
  assert.notEqual(link.textContent.trim(), "", "Name the email action");
});

test("phone action matches card", () => {
  const link = document.querySelector('.card nav a[href="tel:+15550142"]');
  assert.exists(link, "Add a valid tel link for the card's +1 555 0142 number");
  assert.notEqual(link.textContent.trim(), "", "Name the call action");
});

test("safe external portfolio action", () => {
  const link = Array.from(document.querySelectorAll('.card nav a[target="_blank"]'))
    .find(a => /^https:\/\//.test(a.getAttribute("href") || "") && /portfolio|work|linkedin/i.test(a.textContent));
  assert.exists(link, "Add an HTTPS portfolio link opening in a new tab");
  assert.equal(link.relList.contains("noopener") && link.relList.contains("noreferrer"), true, "Protect the new tab with rel=\"noopener noreferrer\"");
});

test("distinct call to action", () => {
  const links = Array.from(document.querySelectorAll('.card nav a'));
  const cta = links.find(a => /ask|contact|book|hire|work together/i.test(a.textContent.trim()) && a.getAttribute("href") && a !== links[0]);
  assert.exists(cta, "Add a separate linked invitation to get in touch");
});
