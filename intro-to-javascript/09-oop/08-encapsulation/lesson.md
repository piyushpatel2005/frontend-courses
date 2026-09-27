---
title: Encapsulation
slug: encapsulation
order: 8
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Private class fields use `#`: `#balance = 0;`"
  - "Private fields cannot be accessed from outside the class."
  - "Provide public getters/setters or methods to read/write private data."
summary: Practice encapsulation with a focused Starline Awards programming mission.
seo_title: Encapsulation | Introduction to JavaScript
seo_description: Learn encapsulation through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, encapsulation, beginner javascript, programming practice
---

# Encapsulation

The seat-counter demo kept its seat count private. Build a stack with a private array in `script.js`, then inspect pushes and pops in the Console. No page elements are involved.

**Encapsulation** hides internal implementation details and exposes only a controlled interface. In JavaScript, private class fields (using `#`) are the modern approach.

## Private fields with `#`

```javascript
class Counter {
    #count = 0;           // private — not accessible outside

    increment() { this.#count++; }
    decrement() { this.#count--; }
    get value() { return this.#count; }
    reset() { this.#count = 0; }
}

const c = new Counter();
c.increment();
c.increment();
console.log(c.value);  // 2
// c.#count outside Counter would be a SyntaxError; leave it commented out.
```

## Validation in setters

```javascript
class Temperature {
    #celsius;

    constructor(celsius) { this.celsius = celsius; }  // uses setter

    get celsius() { return this.#celsius; }
    set celsius(value) {
        if (value < -273.15) throw new Error("Below absolute zero!");
        this.#celsius = value;
    }
    get fahrenheit() { return this.#celsius * 9/5 + 32; }
}
```

## Your Tasks

1. Initialize the private `#items` field to an empty array. The starter checks whether the stack is initialized.
2. Implement the `size` getter to count stored items; the starter checks an empty stack.
3. Implement `push` to add an item; the starter checks the size after two pushes.
4. Implement `pop` to remove and return the top item; the starter checks the item and remaining size.
5. Make `pop` return `undefined` for an empty stack; the starter probes an empty stack.
6. Implement `peek` without removing an item; the starter checks the top item and size.
7. Implement `isEmpty`; the starter checks before and after a push.
8. Log `Stack size: 2 | top: 20` on its own Console line after the starter’s final stack setup.


Next, combine inheritance and private state in a checkout project.
