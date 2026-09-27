const seedForm = document.querySelector("#seed-form");
const seedName = document.querySelector("#seed-name");
const seedList = document.querySelector("#seed-list");
const seedStatus = document.querySelector("#seed-status");
seedForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = seedName.value.trim();
  if (!value) { seedStatus.textContent = "Enter a seed variety."; return; }
  const row = document.createElement("li");
  const label = document.createElement("span");
  label.textContent = value;
  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "remove";
  remove.textContent = `Remove ${value}`;
  row.append(label, remove);
  seedList.append(row);
  seedForm.reset();
  seedStatus.textContent = `${value} added.`;
});
seedList.addEventListener("click", (event) => {
  const button = event.target.closest("button.remove");
  if (!button || !seedList.contains(button)) return;
  const row = button.closest("li");
  const name = row.querySelector("span").textContent;
  row.remove();
  seedStatus.textContent = `${name} removed.`;
});
