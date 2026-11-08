const members = document.querySelector("#members");
const detailName = document.querySelector("#detail-name");
const detailSkill = document.querySelector("#detail-skill");

members.addEventListener("click", (event) => {
  const button = event.target.closest("button.select");
  if (!button || !members.contains(button)) return;
  const card = button.closest("li");
  // TODO: Step 3: complete the corresponding task here.
  // TODO: Step 2: complete the corresponding task here.
});
