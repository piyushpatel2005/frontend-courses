test("element rule exists", () => {
  const sheets = Array.from(document.styleSheets).flatMap((sheet) => Array.from(sheet.cssRules || []));
  assert.exists(sheets.find((rule) => rule.selectorText === "p" && rule.style.color === "gray"), "Add p { color: gray; } in style.css");
});

test("class rule exists", () => {
  const sheets = Array.from(document.styleSheets).flatMap((sheet) => Array.from(sheet.cssRules || []));
  assert.exists(sheets.find((rule) => rule.selectorText === ".alert" && rule.style.color === "orange"), "Add .alert { color: orange; } in style.css");
});

test("ID rule wins the cascade", () => {
  const sheets = Array.from(document.styleSheets).flatMap((sheet) => Array.from(sheet.cssRules || []));
  assert.exists(sheets.find((rule) => rule.selectorText === "#opening" && rule.style.color === "green"), "Add #opening { color: green; } in style.css");
  assert.equal(getComputedStyle(document.querySelector("#opening")).color, "rgb(0, 128, 0)", "The ID rule should make the final paragraph color green");
});
