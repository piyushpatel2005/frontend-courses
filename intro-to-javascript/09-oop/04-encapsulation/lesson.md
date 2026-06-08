---
title: Encapsulation
slug: encapsulation
order: 4
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Private class fields use `#`: `#balance = 0;`"
  - "Private fields cannot be accessed from outside the class."
  - "Provide public getters/setters or methods to read/write private data."
---

# Encapsulation

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
console.log(c.#count); // SyntaxError — truly private!
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

## Your Task

1. Build a class `Stack<T>` (generic-style, but just JavaScript):
   - `#items = []` — private internal storage.
   - `push(item)` — adds item to top.
   - `pop()` — removes and returns top item; returns `undefined` if empty.
   - `peek()` — returns top item without removing; `undefined` if empty.
   - `get size()` — returns number of items.
   - `get isEmpty()` — returns `true` when empty.
2. Verify that `stack.#items` throws a SyntaxError when accessed from outside (comment this out in your submission).
3. Push `10`, `20`, `30`; pop once; display in `#output`: `"Stack size: 2 | top: 20"`.
