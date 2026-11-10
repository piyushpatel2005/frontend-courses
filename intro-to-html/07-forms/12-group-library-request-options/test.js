test("loan options share a labeled group", () => {
  const select = document.querySelector("form select#request");
  const group = [...(select?.querySelectorAll(":scope > optgroup") || [])].find(g => g.label === "Loans");
  assert.exists(group, "Add an optgroup labeled Loans");
  assert.equal([...group.children].map(o => o.value).join("|"), "loan|renew", "Put Borrow and Renew under Loans in order");
});
test("event options share a labeled group", () => {
  const select = document.querySelector("form select#request");
  const group = [...(select?.querySelectorAll(":scope > optgroup") || [])].find(g => g.label === "Events");
  assert.exists(group, "Add an optgroup labeled Events");
  assert.equal([...group.children].map(o => o.value).join("|"), "event|class", "Put Book club and Reading class under Events in order");
});
test("the select and all original choices remain", () => {
  const select = document.querySelector("form select#request");
  assert.exists(select, "Keep the request menu");
  assert.equal(select.name, "request", "Keep the submitted request field name");
  assert.equal([...select.labels].some(l => l.textContent.trim() === "Request type"), true, "Keep its visible connected label");
  assert.equal([...select.children].every(el => el.tagName === "OPTGROUP"), true, "Put all options inside groups");
  assert.equal([...select.querySelectorAll("option")].map(o => o.value+":"+o.textContent.trim()).join("|"), "loan:Borrow a book|renew:Renew a loan|event:Book club|class:Reading class", "Keep all four labeled choices and their values");
});
