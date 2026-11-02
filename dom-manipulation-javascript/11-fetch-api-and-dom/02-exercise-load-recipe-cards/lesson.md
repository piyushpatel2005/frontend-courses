---
title: load recipe cards
slug: exercise-load-recipe-cards
order: 2
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Load an offline fixture with a fetch-shaped function and show recipe titles as safe DOM text.
seo_title: 'Recipe cards with fetch and DOM | Exercise'
seo_description: Load an offline fixture with a fetch-shaped function and show recipe titles as safe DOM text.
seo_keywords: mock fetch, recipe cards, safe DOM rendering
---

# load recipe cards

The noticeboard loaded one object. This shelf receives an array, so each title needs its own `li`. Build an item while it is detached, then put the items in the list. Use `textContent` even when a title looks like HTML.

The supplied click handler runs the helpers in order: loading message → read recipes → render rows → completion message. `readRecipes()` is async; its temporary `return []` keeps the unfinished page runnable. The fixture is local and never contacts a recipe service.

Edit `script.js`, Run to inspect the preview, then Submit to check your work. The HTML, styles, offline fixture, and event/request plumbing are supplied. Functions assigned to `window` can also be called independently by the checks.

## Your Tasks

1. Make `makeRecipeItem(recipe)` return a detached `li` containing `recipe.title` as literal text.
2. In `renderRecipes(recipes)`, replace the old list with one item from `makeRecipeItem` per recipe. An empty array should clear it.
3. In `readRecipes()`, await `mockFetch("/api/recipes")`, await its JSON body, and return that array.
4. In `showRecipeLoading()`, set `#recipe-status` to `Loading recipes…`.
5. In `showRecipeDone()`, set the status to `Recipes loaded.`.

Click Load recipes when finished. You should get two rows, including the literal `<img src=x>` characters. The fixture settles quickly, so the loading message may be too brief to see; Submit holds a request pending rather than relying on a timer.
