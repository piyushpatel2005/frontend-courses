test("Shows the full-session message as plain text", () => {
  const message = document.querySelector("#session-message");
  assert.exists(message, "Keep #session-message");
  assert.equal(message.textContent.trim(), "This session is full.", "Read data-session-state and show the full state");
  assert.equal(message.children.length, 0, "Write plain text, not HTML elements");
});
test("Chooses the open message when the data attribute changes", () => {
  const card = document.querySelector("#session-card");
  const message = document.querySelector("#session-message");
  assert.exists(card, "Keep #session-card");
  assert.exists(message, "Keep #session-message");
  const initial = card.dataset.sessionState;
  try {
    card.dataset.sessionState = "open";
    // Re-run the update behavior when available; otherwise reload the preview after editing HTML.
    if (typeof updateSessionMessage === "function") updateSessionMessage();
    assert.equal(message.textContent.trim(), "Places are available.", "Choose the open branch from dataset.sessionState");
  } finally {
    card.dataset.sessionState = initial;
    if (typeof updateSessionMessage === "function") updateSessionMessage();
  }
});
