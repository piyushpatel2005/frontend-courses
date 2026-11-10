---
title: "Power Loadout"
slug: power-loadout
order: 9
language: javascript
lesson_type: coding
summary: "Map each fictional stage prop to its effect with an independent switch case."
seo_title: "Challenge: Power Loadout | Introduction to JavaScript"
seo_description: "Map each fictional stage prop to its effect with an independent switch case."
seo_keywords: javascript, coding challenge, programming practice
hints:
  - Add one case at a time inside the supplied switch; leave the probes in place.
---


The Starline Awards rehearsal uses labeled stage props to trigger *fictional* effects: a foam `"sword"`, a toy `"gun"`, and a `"shield"`. The preceding entrance-sign demo assigned a message in each switch case. Here `choosePower(item)` should **return** a message for each prop; as you saw in the switch lesson, `return` exits the function without a `break`. Work in `script.js`, not on page elements.

## Worked example

A switch maps known values to results; its default handles the rest:

```javascript run
function chooseRoute(direction) {
  switch (direction) {
    case "east": return "River path";
    default: return "Main path";
  }
}
console.log(chooseRoute("east"));
```

Each prop name is an exact, lowercase string. The supplied probes show one known prop per line, then two values that should use the default. `"Sword"` is deliberately different from `"sword"`.

Fill one case and Run before adding the next. You should see one new completed line per task; the untouched cases still print `undefined`. The function returns the effect name, while the supplied logs display it. Keeping those jobs separate makes the switch easier to read.

Edit `script.js`, Run to inspect the supplied probes, and Submit to check the tasks.

## Your Tasks

1. Add a `"sword"` case returning `"Blade burst"`.
2. Add a `"gun"` case returning `"Pulse shot"`.
3. Add a `"shield"` case returning `"Shield wall"`.
4. Make the default return `"Training mode"` for any other item.
