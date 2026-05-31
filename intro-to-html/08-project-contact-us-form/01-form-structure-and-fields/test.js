test("page has a post form", () => {
  const form = document.querySelector("form");
  assert.exists(form, "Add a <form> element");
  assert.equal((form.getAttribute("method") || "").toLowerCase(), "post", "Set form method to post");
});

test("required name and email fields exist", () => {
  const nameInput = document.querySelector('input[type="text"][required]');
  const emailInput = document.querySelector('input[type="email"][required]');
  assert.exists(nameInput, "Add required text input for name");
  assert.exists(emailInput, "Add required email input");
});

test("message textarea and topic select are present", () => {
  const message = document.querySelector("textarea");
  const topic = document.querySelector("select");
  assert.exists(message, "Add a textarea for message");
  assert.exists(topic, "Add a select field for topic");
  assert.isAtLeast(topic.querySelectorAll("option").length, 3, "Topic select should have at least 3 options");
});

test("all form controls have linked labels", () => {
  const controls = Array.from(document.querySelectorAll("input, textarea, select"));
  const linked = controls.every((el) => {
    if (!el.id) return false;
    return document.querySelector('label[for="' + el.id + '"]') !== null;
  });
  assert.isTrue(linked, "Each form control must have a matching <label for=...>");
});
