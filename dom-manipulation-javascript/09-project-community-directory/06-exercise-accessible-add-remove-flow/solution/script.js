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

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = newName.value.trim();
  const skill = newSkill.value.trim();
  if (!name || !skill) {
    status.textContent = "Enter a name and a skill.";
    return;
  }
  const card = document.createElement("li");
  card.dataset.name = name;
  card.dataset.skill = skill;
  const heading = document.createElement("h3");
  heading.textContent = name;
  const description = document.createElement("p");
  description.textContent = skill;
  const view = document.createElement("button");
  view.type = "button";
  view.className = "select";
  view.textContent = `View ${name}`;
  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "remove";
  remove.textContent = `Remove ${name}`;
  card.append(heading, description, view, remove);
  members.append(card);
  form.reset();
  filterMembers();
  status.textContent = `${name} added.`;
});

members.addEventListener("click", (event) => {
  const button = event.target.closest("button.remove");
  if (!button || !members.contains(button)) return;
  const card = button.closest("li");
  const name = card.dataset.name;
  if (card.classList.contains("selected")) {
    detailName.textContent = "Choose a member";
    detailSkill.textContent = "Their skill will appear here.";
  }
  card.remove();
  filterMembers();
  status.textContent = `${name} removed.`;
});
