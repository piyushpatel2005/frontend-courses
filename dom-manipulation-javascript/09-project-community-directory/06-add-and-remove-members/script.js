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
    const matches = `${card.dataset.name} ${card.dataset.skill}`.toLowerCase().includes(query);
    card.hidden = !matches;
    if (card.hidden && card.classList.contains("selected")) {
      card.classList.remove("selected");
      detailName.textContent = "Choose a member";
      detailSkill.textContent = "Their skill will appear here.";
    }
    if (matches) visible += 1;
  });
  count.textContent = `${visible} ${visible === 1 ? "member" : "members"} shown`;
  empty.hidden = visible !== 0;
}

search.addEventListener("input", filterMembers);

const form = document.querySelector("#member-form");
const newName = document.querySelector("#new-name");
const newSkill = document.querySelector("#new-skill");
const status = document.querySelector("#form-status");
function createMemberCard(name, skill) {
  // TODO: Step 3: complete the corresponding task here.
  return null;
}

form.addEventListener("submit", (event) => {
  // TODO: Step 1: complete the corresponding task here.
  const name = newName.value.trim();
  const skill = newSkill.value.trim();
  if (!name || !skill) {
    // TODO: Step 2: complete the corresponding task here.
    return;
  }
  // TODO: Step 4: complete the corresponding task here.
  // TODO: Step 5: complete the corresponding task here.
  // TODO: Step 6: complete the corresponding task here.
  form.reset();
  newName.focus();
});

members.addEventListener("click", (event) => {
  const button = event.target.closest("button.remove");
  if (!button || !members.contains(button)) return;
  const card = button.closest("li");
  const name = card.dataset.name;
  // TODO: Step 9: complete the corresponding task here.
  // TODO: Step 7: complete the corresponding task here.
  // TODO: Step 10: complete the corresponding task here.
  // TODO: Step 8: complete the corresponding task here.
  // TODO: Step 11: complete the corresponding task here.
});
