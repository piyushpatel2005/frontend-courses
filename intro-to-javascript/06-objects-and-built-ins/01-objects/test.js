test("person stores and updates object properties", () => {
  assert.equal(person.name, 'Ava', "person.name should be Ava");
  assert.equal(person.city, 'Lisbon', "person.city should be updated to Lisbon");
});

test("#output shows object property values", () => {
  const out = document.getElementById("output");
  assert.exists(out);
  assert.equal(out.textContent.trim(), 'Ava | Lisbon', "#output should show the selected properties");
});
