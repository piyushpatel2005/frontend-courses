test("hover state darkens the reserve button", () => {
  const button = document.querySelector(".reserve-button");
  button.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
  assert.equal(getComputedStyle(button).backgroundColor, "rgb(217, 119, 6)", "Use .reserve-button:hover with background-color: #d97706.");
});

test("first reading-list item is bold", () => {
  assert.equal(getComputedStyle(document.querySelector(".reading-list li")).fontWeight, "700", "Use .reading-list li:first-child with font-weight: 700.");
});

test("focused email field has a cyan outline", () => {
  const email = document.querySelector(".email");
  email.focus();
  const style = getComputedStyle(email);
  assert.equal(style.outlineWidth, "3px", "Set the focus outline width to 3px.");
  assert.equal(style.outlineColor, "rgb(103, 232, 249)", "Use #67e8f9 for the focus outline.");
});
