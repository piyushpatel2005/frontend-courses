test("card wrapper", () => {
  assert.exists(document.querySelector("body > div.card"), "Create an outer div.card in the body");
});

test("contributor name", () => {
  const name = document.querySelector(".card h1");
  assert.exists(name, "Add an h1 inside the card");
  assert.notEqual(name.textContent.trim(), "", "Give the contributor a name");
});

test("contributor role", () => {
  const role = document.querySelector(".card p");
  assert.exists(role, "Add a role paragraph inside the card");
  assert.notEqual(role.textContent.trim(), "", "Give the contributor a role");
});

test("profile portrait", () => {
  const img = document.querySelector(".card img");
  assert.exists(img, "Add a profile image inside the card");
  assert.notEqual((img.getAttribute("src") || "").trim(), "", "Give the image a source");
  assert.notEqual((img.getAttribute("alt") || "").trim(), "", "Describe the portrait in alt text");
});

test("contact list", () => {
  const contact = document.querySelector(".card div.contact");
  assert.exists(contact, "Nest a div.contact in the card");
  const items = Array.from(contact.querySelectorAll('ul > li'));
  assert.equal(items.length >= 2, true, "Add Email and Phone contact list items");
  assert.equal([/email/i, /phone/i].every(pattern => items.some(li => pattern.test(li.textContent))), true, "Include Email and Phone contact details");
});

test("contact labels and values", () => {
  const items = Array.from(document.querySelectorAll(".card .contact ul > li"));
  const labeled = items.filter(li => {
    const spans = li.querySelectorAll("span");
    return spans.length >= 2 && spans[0].textContent.trim() && spans[1].textContent.trim();
  });
  assert.equal([/email/i, /phone/i].every(pattern => labeled.some(li => pattern.test(li.querySelector('span').textContent))), true, "Put each Email and Phone label and value in separate spans");
});
