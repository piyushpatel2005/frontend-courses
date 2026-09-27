const form = document.querySelector("#garden-form");
const status = document.querySelector("#garden-status");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const guest = String(data.get("guest") ?? "").trim();
  if (!guest) {
    status.textContent = "Enter your name to request help.";
    return;
  }
  const help = data.getAll("help");
  const selection = help.length ? help.join(", ") : "no help selected";
  status.textContent = `${guest} requested ${selection}.`;
});
