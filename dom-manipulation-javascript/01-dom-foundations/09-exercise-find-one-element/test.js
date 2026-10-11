test("The walk status is confirmed", () => {
  const status = document.getElementById("walk-status");
  assert.exists(status, "Keep the walk-status element");
  assert.equal(status.textContent.trim(), "Walk confirmed",
    "Set the walk status text to Walk confirmed");
});

test("Only the first detail shows the meeting place", () => {
  const details = document.querySelectorAll(".detail");
  assert.equal(details.length, 2, "Keep both detail paragraphs");
  assert.equal(details[0].textContent.trim(), "Meet at the bridge",
    "Use querySelector to change the first detail");
  assert.equal(details[1].textContent.trim(), "Bring a small lantern.",
    "Leave the second detail unchanged");
});
