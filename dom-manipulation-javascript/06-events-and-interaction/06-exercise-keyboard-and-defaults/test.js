test("Enter in the search field is handled and canceled", () => {
  const input = document.querySelector("#recipe");
  const result = document.querySelector("#recipe-result");
  input.value = "  Bread  ";
  const accepted = input.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true, cancelable: true }));
  assert.equal(accepted, false, "Prevent Enter's default action in the search field");
  assert.equal(result.textContent, "Finding: Bread", "Show the trimmed search term");
});
test("Other keys remain available and submit is handled", () => {
  const input = document.querySelector("#recipe");
  const form = document.querySelector("#recipe-form");
  input.value = "Pie";
  const tabAccepted = input.dispatchEvent(new KeyboardEvent("keydown", { key: "Tab", bubbles: true, cancelable: true }));
  const letterAccepted = input.dispatchEvent(new KeyboardEvent("keydown", { key: "p", bubbles: true, cancelable: true }));
  assert.equal(tabAccepted, true, "Do not cancel Tab navigation");
  assert.equal(letterAccepted, true, "Do not cancel ordinary typing");
  const submitted = form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  assert.equal(submitted, false, "Prevent the form from navigating on submit");
  assert.equal(document.querySelector("#recipe-result").textContent, "Finding: Pie", "The Search button should use the same result");
});
