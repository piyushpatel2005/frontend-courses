const query = document.querySelector("#recipe-query");
const recipes = document.querySelectorAll("#recipes li");
const count = document.querySelector("#recipe-count");
query.addEventListener("input", () => {
  const term = query.value.trim().toLowerCase();
  let visible = 0;
  for (const recipe of recipes) {
    recipe.hidden = !recipe.textContent.toLowerCase().includes(term);
    if (!recipe.hidden) visible += 1;
  }
  count.textContent = `${visible} recipes found`;
});