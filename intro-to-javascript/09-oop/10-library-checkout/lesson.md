---
title: "Library Checkout"
slug: library-checkout
order: 10
language: javascript
lesson_type: coding
summary: "Build a library model using the equipment desk's pattern. `LibraryItem` owns the title and private loan status. `Book` adds an author and a description while inheriting the loan rules."
seo_title: "Library Checkout OOP Project | Introduction to JavaScript"
seo_description: "Build a library model using the equipment desk's pattern. `LibraryItem` owns the title and private loan status. `Book` adds an author and a description while inheriting the loan rules."
seo_keywords: javascript, oop project, inheritance, private fields, library checkout
hints:
  - "Call super(title) before assigning the book author."
  - "Keep the loan state in #checkedOut; change it only inside methods."
  - "Return false for an invalid checkout or return without changing state."
---


Build a library model using the equipment desk's pattern. `LibraryItem` owns the title and private loan status. `Book` adds an author and a description while inheriting the loan rules.

The class structure and probes are supplied; complete one behavior at a time in `script.js`. `Book` cannot directly read `#checkedOut`, even though it inherits from `LibraryItem`. Read the inherited `available` getter instead. A new book is available, a successful checkout makes it unavailable, and a successful return restores availability.

The description should work in either state and use the instance's title and author, not a fixed sentence. The probes follow both state transitions before asking for the final description.

## Worked example

A different private-state class exposes behavior without exposing its field:

```javascript run
class Lamp {
  #on = false;
  switchOn() { this.#on = true; }
  get isOn() { return this.#on; }
}
const lamp = new Lamp();
lamp.switchOn();
console.log(lamp.isOn);
```

Edit `script.js`, then use **Run** to inspect the supplied checkpoints. Use **Submit** to check your tasks in order. Keep the supplied probes; change only the requested definitions and final logs.

## Your Tasks

1. Store `title` in the `LibraryItem` constructor.
2. Return the opposite of private `#checkedOut` from the `available` getter.
3. Store `author` in `Book` after the supplied `super(title)` call.
4. Implement `checkout()` to return `false` if already on loan; otherwise mark the item on loan and return `true`.
5. Implement `returnItem()` to return `false` if already available; otherwise restore availability and return `true`.
6. Implement `Book.describe()` as `Title by Author — available` or `Title by Author — on loan`, using its public availability getter.

## Section complete

You can model shared behavior and protect state while still exposing useful operations. Take the quiz to check where each responsibility belongs.
