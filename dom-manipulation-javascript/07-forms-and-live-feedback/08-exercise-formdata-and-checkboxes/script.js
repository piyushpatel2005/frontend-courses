const form = document.querySelector("#garden-form");
const status = document.querySelector("#garden-status");
form.addEventListener("submit", event => {
  // Task 1: add your code here.
  const data = new FormData(form);
  const guest = String(data.get("guest") ?? "").trim();
  // Task 4: add your code here.
  let report = "";
  // Task 2: add your code here.
  // Task 3: add your code here.
  status.textContent = report;
});
