---
title: "Challenge: Power Loadout"
slug: power-loadout
order: 6
language: javascript
lesson_type: coding
summary: Solve a practical JavaScript programming challenge using the preceding worked demo.
seo_title: "Challenge: Power Loadout | Introduction to JavaScript"
seo_description: Practice JavaScript with a focused, testable programming challenge.
seo_keywords: javascript, coding challenge, programming practice
hints:
  - Start with the smallest function signature, then test one case at a time.
---

# Challenge: Power Loadout

The Starline Awards rehearsal uses labeled stage props to trigger *fictional* effects: a foam `"sword"`, a toy `"gun"`, and a `"shield"`. The preceding entrance-sign demo assigned a message in each switch case. Here `choosePower(item)` should **return** a message for each prop; as you saw in the switch lesson, `return` exits the function without a `break`. Work in `script.js`, not on page elements.

## Worked example

A switch maps known values to results; its default handles the rest:

```javascript
function chooseRoute(direction) {
  switch (direction) {
    case "east": return "River path";
    default: return "Main path";
  }
}
console.log(chooseRoute("east")); // River path
```

## Your Tasks

1. Implement `choosePower(item)` using `switch`: sword gives `"Blade burst"`, gun gives `"Pulse shot"`, shield gives `"Shield wall"`, and all other items give `"Training mode"`. The provided sword probe should print `Sword: Blade burst`.
2. Log `Loadout: Blade burst,Pulse shot,Shield wall` from sword, gun, and shield calls.
3. Log `Pencil: Training mode` from an unknown item.
4. Log `Shield wall` alone from `choosePower("shield")`.

## Checkpoint

Run after each change; log the four requested checkpoints on separate Console lines.
