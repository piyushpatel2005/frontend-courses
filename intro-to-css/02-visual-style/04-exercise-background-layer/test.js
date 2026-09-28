test("announcement has a violet fallback background", () => {
  const announcement = document.querySelector(".announcement");
  assert.equal(getComputedStyle(announcement).backgroundColor, "rgb(124, 58, 237)", "Set .announcement background-color to #7c3aed.");
});

test("announcement uses the requested diagonal gradient", () => {
  const rules = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules || []));
  const image = rules.filter(rule => rule.selectorText === ".announcement").map(rule => rule.style.getPropertyValue("background-image")).find(Boolean) || "";
  assert.match(image.replaceAll(" ", ""), /linear-gradient\(135deg,(?:#7c3aed|rgb\(124,58,237\)),(?:#ec4899|rgb\(236,72,153\))\)/i, "Add linear-gradient(135deg, #7c3aed, #ec4899) as the background image.");
});

test("announcement text is white", () => {
  const announcement = document.querySelector(".announcement");
  assert.equal(getComputedStyle(announcement).color, "rgb(255, 255, 255)", "Set .announcement color to white.");
});
