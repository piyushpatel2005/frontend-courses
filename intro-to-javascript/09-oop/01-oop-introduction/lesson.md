---
title: OOP Introduction
slug: oop-introduction
order: 1
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Store both data and a method inside the car object."
  - "Inside accelerate, update this.speed by adding the amount."
---

# OOP Introduction

Object-oriented thinking starts with objects that hold both data and behavior. A car that knows its own speed is a simple way to introduce that pattern.

## Example

```javascript
const car = {
  brand: 'Roadster',
  speed: 80,
  accelerate(amount) {
    this.speed += amount;
  }
};
```

## Your Task

1. Create a car object with brand, speed, and an accelerate(amount) method that increases speed.
2. Call accelerate(20) and display Roadster | 100 in #output.
