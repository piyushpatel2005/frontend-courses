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
  assert.equal(contact.querySelectorAll("ul > li").length >= 2, true, "Add two contact list items");
});

test("contact labels and values", () => {
  const items = Array.from(document.querySelectorAll(".card .contact ul > li"));
  const labeled = items.filter(li => {
    const spans = li.querySelectorAll("span");
    return spans.length >= 2 && spans[0].textContent.trim() && spans[1].textContent.trim();
  });
  assert.equal(labeled.length >= 2, true, "Put a non-empty label and value in separate spans in two items");
});
