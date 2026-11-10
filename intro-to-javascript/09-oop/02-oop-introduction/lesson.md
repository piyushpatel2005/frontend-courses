---
title: OOP Introduction
slug: oop-introduction
order: 2
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Store both data and a method inside the car object."
  - "Inside accelerate, update this.speed by adding the amount."
summary: "Give a car its starting data, then add a method that changes its speed. The notebook demo used the same pattern with page counts."
seo_title: OOP Introduction | Introduction to JavaScript
seo_description: "Give a car its starting data, then add a method that changes its speed. The notebook demo used the same pattern with page counts."
seo_keywords: javascript, oop introduction, beginner javascript, programming practice
---


Give a car its starting data, then add a method that changes its speed. The notebook demo used the same pattern with page counts.

Use `this.speed` inside `accelerate(amount)` so the method updates the object that received the call. The supplied `car.accelerate(20)` provides 20 as `amount`. Use the parameter instead of adding a fixed 20 inside the method; a later call may ask for a different increase.

## Example

```javascript run
const thermostat = {
  temperature: 20,
  raise(degrees) {
    this.temperature += degrees;
  }
};
thermostat.raise(2);
console.log(thermostat.temperature);
```

Edit `script.js`, then use **Run** to inspect the supplied checkpoints. Use **Submit** to check your tasks in order. Keep the supplied probes; change only the requested definitions and final logs.

## Your Tasks

1. Set the `car` brand to `"Roadster"`.
2. Set its starting `speed` to 80.
3. Add an `accelerate(amount)` method that adds `amount` to `this.speed`.
4. Log the final brand and speed as `Roadster | 100`.
