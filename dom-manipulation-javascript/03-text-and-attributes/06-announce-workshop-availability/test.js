// Native focus/layout checks need a rendered document, not only parsed markup.
async function withPreviewLayout(check) {
  await new Promise(resolve => requestAnimationFrame(resolve));
  return await check();
}
test("Shows the full-session message as plain text", () => withPreviewLayout(() => {
  const message = document.querySelector("#session-message");
  assert.exists(message, "Keep #session-message");
  message.textContent = "Checking";
  updateSessionMessage();
  assert.equal(message.textContent.trim(), "This session is full.", "Read data-session-state and show the full state");
  assert.equal(message.children.length, 0, "Write plain text, not HTML elements");
}));
test("Chooses the open message when the data attribute changes", () => withPreviewLayout(() => {
  const card = document.querySelector("#session-card");
  const message = document.querySelector("#session-message");
  assert.exists(card, "Keep #session-card");
  assert.exists(message, "Keep #session-message");
  const initial = card.dataset.sessionState;
  try {
    card.dataset.sessionState = "open";
    updateSessionMessage();
    assert.equal(message.textContent.trim(), "Places are available.", "Choose the open branch from dataset.sessionState");
  } finally {
    card.dataset.sessionState = initial;
    updateSessionMessage();
  }
}));
