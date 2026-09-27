const form = document.querySelector("#seed-form");
const status = document.querySelector("#seed-status");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const visitor = String(data.get("visitor") ?? "").trim();
  const interests = data.getAll("interest");
  if (!visitor) {
    status.textContent = "Enter your name first.";
    return;
  }
  const choices = interests.length ? interests.join(", ") : "no seeds yet";
  status.textContent = `${visitor} requested ${choices}.`;
});
