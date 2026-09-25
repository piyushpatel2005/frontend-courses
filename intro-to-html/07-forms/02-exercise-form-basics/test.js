test("page has a form element", () => {
  assert.count("form", 1, "Add a <form> element");
});

test("form has a text input for name", () => {
  var nameInput = document.querySelector('input[type="text"]');
  assert.exists(nameInput, "Add an <input type=\"text\"> for the name field");
});

test("form has an email input", () => {
  var emailInput = document.querySelector('input[type="email"]');
  assert.exists(emailInput, "Add an <input type=\"email\"> for the email field");
});

test("form has a password input", () => {
  var passInput = document.querySelector('input[type="password"]');
  assert.exists(passInput, "Add an <input type=\"password\"> for the password field");
});

test("form has a submit button", () => {
  var btn = document.querySelector('button[type="submit"], input[type="submit"]');
  assert.exists(btn, "Add a submit button");
});

test("every input has a label", () => {
  var inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
  var allLabelled = Array.from(inputs).every(function(input) {
    var id = input.id;
    if (!id) return false;
    return document.querySelector('label[for="' + id + '"]') !== null;
  });
  assert.exists(allLabelled, "Each input must have a <label for=\"...\"> matching its id");
});
