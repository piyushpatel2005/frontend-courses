const members = document.querySelector("#members");
const detailName = document.querySelector("#detail-name");
const detailSkill = document.querySelector("#detail-skill");

members.addEventListener("click", (event) => {
  const button = event.target.closest("button.select");
  if (!button || !members.contains(button)) return;
  const card = button.closest("li");
  members.querySelectorAll("li").forEach((item) => item.classList.remove("selected"));
  card.classList.add("selected");
  detailName.textContent = card.dataset.name;
  detailSkill.textContent = card.dataset.skill;
});

const search = document.querySelector("#member-search");
const count = document.querySelector("#result-count");
const empty = document.querySelector("#empty-state");

function filterMembers() {
  const query = search.value.trim().toLowerCase();
  let visible = 0;
  members.querySelectorAll("li").forEach((card) => {
    // TODO: Step 2: complete the corresponding task here.
    // TODO: Step 5: complete the corresponding task here.
    if (matches) visible += 1;
  });
  // TODO: Step 3: complete the corresponding task here.
  // TODO: Step 4: complete the corresponding task here.
}

search.addEventListener("input", filterMembers);
