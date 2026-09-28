test("page has a Meridian signal heading", () => {
  const h1 = document.querySelector("body h1");
  assert.exists(h1, "Add an <h1> element in the body");
  assert.match(h1.textContent, /meridian|signal/i, "Use Meridian or Signal in the heading");
});

test("page has a signal detail", () => {
  const detail = document.querySelector("body p");
  assert.exists(detail, "Add a first <p> with a signal detail");
  assert.notEqual(detail.textContent.trim(), "", "Write a signal detail");
});

test("page has a next-step message", () => {
  const next = document.querySelectorAll("body p")[1];
  assert.exists(next, "Add a second <p> with the next step");
  assert.notEqual(next.textContent.trim(), "", "Write a next-step message");
});
