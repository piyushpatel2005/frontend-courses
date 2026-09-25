test("announcement has a violet fallback background", () => {
  const announcement = document.querySelector(".announcement");
  assert.equal(getComputedStyle(announcement).backgroundColor, "rgb(124, 58, 237)", "Set .announcement background-color to #7c3aed.");
});

test("announcement uses the requested diagonal gradient", () => {
  const image = getComputedStyle(document.querySelector(".announcement")).backgroundImage;
  assert.includes(image.replaceAll(" ", ""), "linear-gradient(135deg,rgb(124,58,237),rgb(236,72,153))", "Add linear-gradient(135deg, #7c3aed, #ec4899) as the background image.");
});

test("announcement text is white", () => {
  const announcement = document.querySelector(".announcement");
  assert.equal(getComputedStyle(announcement).color, "rgb(255, 255, 255)", "Set .announcement color to white.");
});
