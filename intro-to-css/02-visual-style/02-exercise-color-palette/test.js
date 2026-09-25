test("ticket has a navy surface", () => {
  const ticket = document.querySelector(".ticket");
  assert.equal(getComputedStyle(ticket).backgroundColor, "rgb(23, 37, 84)", "Set .ticket background-color to #172554.");
});

test("heading is cream", () => {
  const heading = document.querySelector("h1");
  assert.equal(getComputedStyle(heading).color, "rgb(255, 247, 237)", "Set h1 color to #fff7ed.");
});

test("entry badge has accent colors", () => {
  const entry = document.querySelector(".entry");
  const styles = getComputedStyle(entry);
  assert.equal(styles.backgroundColor, "rgb(251, 113, 133)", "Set .entry background-color to #fb7185.");
  assert.equal(styles.color, "rgb(23, 37, 84)", "Set .entry color to #172554.");
});
