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
// Add a submit handler and delegate Remove clicks from #members.
