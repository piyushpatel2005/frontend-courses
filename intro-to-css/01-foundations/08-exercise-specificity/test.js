test("element rule exists", () => {
  const sheets = Array.from(document.styleSheets).flatMap((sheet) => Array.from(sheet.cssRules || []));
  assert.exists(sheets.find((rule) => rule.selectorText === "p" && rule.style.color === "gray"), "Add p { color: gray; } in style.css");
});

test("class rule exists", () => {
  const sheets = Array.from(document.styleSheets).flatMap((sheet) => Array.from(sheet.cssRules || []));
  assert.exists(sheets.find((rule) => rule.selectorText === ".highlight" && rule.style.color === "orange"), "Add .highlight { color: orange; } in style.css");
});

test("ID rule wins the cascade", () => {
  const sheets = Array.from(document.styleSheets).flatMap((sheet) => Array.from(sheet.cssRules || []));
  assert.exists(sheets.find((rule) => rule.selectorText === "#intro" && rule.style.color === "green"), "Add #intro { color: green; } in style.css");
  assert.equal(getComputedStyle(document.querySelector("#intro")).color, "rgb(0, 128, 0)", "The ID rule should make the final paragraph color green");
});
