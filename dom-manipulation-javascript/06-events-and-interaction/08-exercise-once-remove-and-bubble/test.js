test("Welcome callback runs only once", () => {
  const welcome = document.querySelector("#welcome");
  welcome.click(); welcome.click(); welcome.click();
  assert.equal(document.querySelector("#welcome-count").textContent, "Welcomes: 1", "A once listener should count only the first click");
});
test("Mute removes the original bell callback", () => {
  const bell = document.querySelector("#bell");
  const output = document.querySelector("#bell-count");
  bell.click();
  assert.equal(output.textContent, "Bells: 1", "The bell should work before muting");
  document.querySelector("#mute").click();
  bell.click(); bell.click();
  assert.equal(output.textContent, "Bells: 1", "Remove the same named handler when muted");
});
test("Standard bubbles; Private stops only its own click", () => {
  const output = document.querySelector("#actions");
  output.textContent = "Actions: ";
  document.querySelector("#standard").click();
  assert.equal(output.textContent, "Actions: Standard Panel ", "Standard click should reach the parent panel");
  output.textContent = "Actions: ";
  document.querySelector("#private").click();
  assert.equal(output.textContent, "Actions: Private ", "Private should not also trigger the parent listener");
});
