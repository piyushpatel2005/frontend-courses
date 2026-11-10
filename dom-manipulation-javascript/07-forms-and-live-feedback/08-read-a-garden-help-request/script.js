const form = document.querySelector("#garden-form");
const status = document.querySelector("#garden-status");
form.addEventListener("submit", event => {
  // TODO: Step 1: complete the corresponding task here.
  const data = new FormData(form);
  const guest = String(data.get("guest") ?? "").trim();
  // TODO: Step 4: complete the corresponding task here.
  let report = "";
  // TODO: Step 2: complete the corresponding task here.
  // TODO: Step 3: complete the corresponding task here.
  status.textContent = report;
});
