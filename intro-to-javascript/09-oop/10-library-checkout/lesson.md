---
title: "Project: Library Checkout"
slug: library-checkout
order: 10
language: javascript
lesson_type: coding
summary: Build a small library checkout model with inheritance and private loan state.
seo_title: "Library Checkout OOP Project | Introduction to JavaScript"
seo_description: Practice JavaScript classes, extends, super, and private fields in a console-only library project.
seo_keywords: javascript, oop project, inheritance, private fields, library checkout
hints:
  - "Call super(title) before assigning the book author."
  - "Keep the loan state in #checkedOut; change it only inside methods."
  - "Return false for an invalid checkout or return without changing state."
---

# Project: Library Checkout

The equipment desk demo showed guarded checkout behavior inherited by a specialized class. The private field still belongs to the base class and cannot be read directly by the child. Now build a library checkout system from scratch in `script.js`. Books record authors and describe their own availability. All results go to the Console, not a page element.

`LibraryItem` owns the private status; `Book` inherits checkout and return behavior. The checkpoints make it possible to inspect transitions after each operation. Do not expose the private field directly or write `book.#checkedOut` outside the class.

## Worked example

A different private-state class exposes behavior without exposing its field:

```javascript
class Lamp {
  #on = false;
  switchOn() { this.#on = true; }
  get isOn() { return this.#on; }
}
const lamp = new Lamp();
lamp.switchOn();
console.log(lamp.isOn); // true
```

## Your Tasks

1. Store the title in the `LibraryItem` constructor. The starter checks its title.
2. Implement the `available` getter using the initial private `#checkedOut` state. The starter checks a new item.
3. Store the author in `Book` while inheriting from `LibraryItem`. The starter checks the author.
4. Implement `checkout()` to mark an available book on loan and return `true`. The starter checks the result and availability.
5. Make a second checkout return `false` without changing availability. The starter checks the repeated call.
6. Implement `returnItem()` to restore availability and return `true`. The starter checks the result.
7. Make a repeated return yield `false`. The starter checks the repeated call.
8. Implement `Book.describe()` to return `River Atlas by N. Vale — available` after the return. The starter logs it.

## Section complete

You can model shared behavior and protect state while still exposing useful operations. Take the quiz to check where each responsibility belongs.
