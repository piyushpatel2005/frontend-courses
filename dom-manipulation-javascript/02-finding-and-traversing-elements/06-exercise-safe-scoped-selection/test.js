test("Only the bike clinic status changes", () => {
  const bike = document.querySelector("#bike-clinic");
  assert.exists(bike, "Keep the bike-clinic card");
  assert.equal(bike.querySelector(".status").textContent.trim(), "Mechanics ready",
    "Find .status within #bike-clinic and update it");
  assert.equal(document.querySelector("#book-exchange .status").textContent.trim(),
    "Tables being set up", "Leave the book exchange status alone");
});

test("The optional alert is updated when present and safely ignored when absent", () => {
  const alert = document.createElement("p");
  alert.className = "optional-alert";
  document.body.appendChild(alert);
  try {
    updateOptionalAlert();
    assert.equal(alert.textContent, "Check the desk", "Update a present optional alert");
  } finally {
    alert.remove();
  }
  updateOptionalAlert(); // The missing optional element must not throw.
});
