test("Welcome callback runs only once", () => {
  const welcome = document.querySelector("#welcome");
  welcome.click(); welcome.click(); welcome.click();
  assert.equal(document.querySelector("#welcome-count").textContent, "Welcomes: 1", "A once listener should count only the first click");
});
test("Bell callback increments for each click", () => {
  const bell = document.querySelector("#bell");
  const output = document.querySelector("#bell-count");
  const before = Number(output.textContent.split(": ")[1]);
  bell.click(); bell.click();
  assert.equal(output.textContent, "Bells: " + (before + 2), "Increment on both Bell clicks");
});
test("Mute removes the original bell callback", () => {
  const bell = document.querySelector("#bell");
  const output = document.querySelector("#bell-count");
  const before = Number(output.textContent.split(": ")[1]);
  bell.click();
  assert.equal(output.textContent, "Bells: " + (before + 1), "Bell must work before it can be muted");
  const beforeMute = output.textContent;
  document.querySelector("#mute").click();
  bell.click(); bell.click();
  assert.equal(output.textContent, beforeMute, "Remove the named handler when muted");
});
test("Standard click reaches the parent", () => {
  const output = document.querySelector("#actions");
  output.textContent = "Actions: ";
  document.querySelector("#standard").click();
  assert.equal(output.textContent, "Actions: Standard Panel ", "Standard click should reach the parent panel");
});
test("Private click stops propagation", () => {
  const output = document.querySelector("#actions");
  output.textContent = "Actions: ";
  document.querySelector("#private").click();
  assert.equal(output.textContent, "Actions: Private ", "Private should not trigger the parent listener");
});
