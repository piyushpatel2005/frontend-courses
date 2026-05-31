test("page has one card div wrapper", () => {
  const card = document.querySelector("div.card");
  assert.exists(card, "Add one outer <div class=\"card\"> wrapper");
});

test("card has identity content", () => {
  const h1 = document.querySelector("div.card h1");
  const role = document.querySelector("div.card p");
  assert.exists(h1, "Add an <h1> with your name inside .card");
  assert.notEqual(h1.textContent.trim(), "", "Name heading should not be empty");
  assert.exists(role, "Add a <p> for your role/title inside .card");
});

test("profile image exists with alt text", () => {
  const img = document.querySelector("div.card img");
  assert.exists(img, "Add a profile <img> inside your card");
  assert.exists(img.getAttribute("alt"), "Image should have alt text");
  assert.notEqual((img.getAttribute("alt") || "").trim(), "", "Image alt text cannot be empty");
});

test("contact block and inline spans exist", () => {
  const block = document.querySelector("div.card div.contact, div.card div");
  const items = document.querySelectorAll("div.card ul li");
  const spanItems = Array.from(items).filter((li) => li.querySelectorAll("span").length >= 2);
  assert.exists(block, "Add a nested <div> block for contact details");
  assert.isAtLeast(items.length, 2, "Add at least two contact list items");
  assert.isAtLeast(spanItems.length, 2, "In at least two list items, use two <span> tags for label and value");
});
