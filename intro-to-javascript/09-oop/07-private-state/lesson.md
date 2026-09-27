---
title: "Demo: A private seat counter"
slug: demo-private-state
order: 7
language: javascript
lesson_type: interactive
summary: Run a worked JavaScript example of a private seat counter.
seo_title: "Demo: A private seat counter | Introduction to JavaScript"
seo_description: Run and trace a worked JavaScript OOP example before the exercise.
seo_keywords: javascript, encapsulation, private fields, getter
---

# A private seat counter

A private `#available` field prevents external code from editing the count directly. Public methods enforce a rule: no more reservations once seats run out. A getter reads the state safely.

```javascript run
class SeatCounter {
  #available;
  constructor(seats) { this.#available = seats; }
  reserve() {
    if (this.#available === 0) return false;
    this.#available -= 1;
    return true;
  }
  get available() { return this.#available; }
}
const counter = new SeatCounter(1);
console.log(counter.reserve());
console.log(counter.reserve());
console.log(counter.available);
```

## What to notice

Try starting with two seats. Writing `counter.#available` outside the class would be a syntax error; do not put it in runnable code. Next, build a **stack** with a private array.
