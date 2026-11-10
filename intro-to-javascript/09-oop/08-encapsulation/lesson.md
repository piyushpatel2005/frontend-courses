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
summary: "Build a stack: the last item pushed is the first item popped. Pushing 10 then 20 makes 20 the top. `peek()` reads that top without removing it; `pop()` removes it."
seo_title: Encapsulation | Introduction to JavaScript
seo_description: "Build a stack: the last item pushed is the first item popped. Pushing 10 then 20 makes 20 the top. `peek()` reads that top without removing it; `pop()` removes it."
seo_keywords: javascript, encapsulation, beginner javascript, programming practice
---


Build a stack: the last item pushed is the first item popped. Pushing 10 then 20 makes 20 the top. `peek()` reads that top without removing it; `pop()` removes it.

Store the items in a private array so callers cannot change it behind your methods. The supplied `initialized` getter reports only whether the array exists. `size` and `isEmpty` are also getters, so callers read `stack.size` and `stack.isEmpty` without parentheses. `push`, `pop`, and `peek` are methods and do use parentheses.

Array `push` appends an item. Array `pop` already returns `undefined` for an empty array, so a stack can delegate that rule instead of inventing a special empty value. Read the last item at index `length - 1` to peek; on an empty array this lookup is `undefined`.

## Private fields with `#`

```javascript run
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
console.log(c.value);
// c.#count outside Counter would be a SyntaxError; leave it commented out.
```

## Validation in setters

A setter runs when you assign a property, such as `temperature.celsius = 25`. Its parameter receives the assigned value. Here the constructor uses that setter too, so initialization follows the same validation rule. `throw new Error(...)` stops the operation on invalid input; unlike the earlier callback example, the error is thrown rather than passed to another function.

```javascript run
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
const temperature = new Temperature(20);
temperature.celsius = 25;
console.log(temperature.fahrenheit);
```

Edit `script.js`, then use **Run** to inspect the supplied checkpoints. Use **Submit** to check your tasks in order. Keep the supplied probes; change only the requested definitions and final logs.

## Your Tasks

1. Initialize private `#items` to an empty array.
2. Return the number of stored items from the `size` getter.
3. Append the supplied item in `push(item)`.
4. Remove and return the last item in `pop()`; return `undefined` on an empty stack.
5. Return the last item without removing it from `peek()`.
6. Return whether the stack has zero items from the `isEmpty` getter.
7. Log the supplied stack state as `Stack size: 2 | top: 20`.
