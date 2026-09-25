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
summary: Practice encapsulation with a focused Starline Awards programming mission.
seo_title: Encapsulation | Introduction to JavaScript
seo_description: Learn encapsulation through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, encapsulation, beginner javascript, programming practice
---

# Encapsulation

## Mission: Talent Roster

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you build reusable artist blueprints for the Starline Awards roster. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

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
2. Verify that `stack.#items` throws a SyntaxError when accessed from outside (comment this out in your submission).
3. Push `10`, `20`, `30`; pop once; log with `console.log()`: `"Stack size: 2 | top: 20"`.
4. Verify the program behavior: pop on empty stack returns undefined.
5. Verify the program behavior: peek returns top without removing.
6. Verify the program behavior: isEmpty works correctly.
7. Verify the program behavior: logs the mission result.

## Talent Roster complete

You can create and extend object blueprints for related program data. Take the section quiz, then coordinate results that arrive later.
