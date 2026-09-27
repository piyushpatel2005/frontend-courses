test("Only the bike clinic status changes", () => {
  const bike = document.querySelector("#bike-clinic");
  assert.exists(bike, "Keep the bike-clinic card");
  assert.equal(bike.querySelector(".status").textContent.trim(), "Mechanics ready",
    "Find .status within #bike-clinic and update it");
  assert.equal(document.querySelector("#book-exchange .status").textContent.trim(),
    "Tables being set up", "Leave the book exchange status alone");
});

test("The missing optional alert does not interrupt initialization", () => {
  assert.equal(document.querySelector(".optional-alert"), null,
    "This exercise intentionally has no optional alert");
  assert.equal(document.body.dataset.scriptFinished, "yes",
    "Guard the absent alert, then set data-script-finished to yes at the end of script.js");
});
