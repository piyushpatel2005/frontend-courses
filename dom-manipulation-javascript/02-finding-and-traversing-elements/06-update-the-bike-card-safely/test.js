// Native focus/layout checks need a rendered document, not only parsed markup.
async function withPreviewLayout(check) {
  await new Promise(resolve => requestAnimationFrame(resolve));
  return await check();
}
test("Updates only the bike status and tolerates missing targets", () => withPreviewLayout(() => {
  const bike = document.querySelector("#bike-clinic");
  const status = bike.querySelector(".status");
  const other = document.querySelector("#book-exchange .status");
  const parent = bike.parentNode;
  const next = bike.nextSibling;
  const statusParent = status.parentNode;
  const statusNext = status.nextSibling;
  const originalText = status.textContent;
  try {
    status.textContent = "Waiting";
    updateBikeStatus();
    assert.equal(status.textContent, "Mechanics ready", "Update the bike card's status");
    assert.equal(other.textContent, "Tables being set up", "Leave the book exchange alone");
    status.remove();
    updateBikeStatus();
    bike.remove();
    updateBikeStatus();
  } finally {
    parent.insertBefore(bike, next);
    statusParent.insertBefore(status, statusNext);
    status.textContent = originalText;
  }
}));

test("Updates an optional alert only when present", () => withPreviewLayout(() => {
  const alert = document.createElement("p");
  alert.className = "optional-alert";
  document.body.appendChild(alert);
  try {
    updateOptionalAlert();
    assert.equal(alert.textContent, "Check the desk", "Update a present optional alert");
  } finally {
    alert.remove();
  }
  updateOptionalAlert();
}));
