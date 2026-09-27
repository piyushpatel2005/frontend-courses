---
title: "Demo: Equipment desk checkout"
slug: demo-equipment-checkout
order: 9
language: javascript
lesson_type: interactive
summary: Run a worked JavaScript example of equipment desk checkout.
seo_title: "Demo: Equipment desk checkout | Introduction to JavaScript"
seo_description: Run and trace a worked JavaScript OOP example before the exercise.
seo_keywords: javascript, oop project, inheritance, private state
---

# Equipment desk checkout

A community equipment desk loans kits. The base class keeps its loan status private and exposes guarded methods. A specialized camera kit inherits those rules and adds its own description. Run the checkout twice, then return it.

```javascript run
class Equipment {
  #onLoan = false;
  constructor(label) { this.label = label; }
  checkout() {
    if (this.#onLoan) return false;
    this.#onLoan = true;
    return true;
  }
  returnItem() {
    if (!this.#onLoan) return false;
    this.#onLoan = false;
    return true;
  }
  get available() { return !this.#onLoan; }
  describe() { return `${this.label}: ${this.available ? "ready" : "on loan"}`; }
}
class CameraKit extends Equipment {
  constructor(label, lens) {
    super(label);
    this.lens = lens;
  }
  describe() { return `${super.describe()} (${this.lens} lens)`; }
}
const kit = new CameraKit("Travel camera", "wide");
console.log(kit.checkout());
console.log(kit.checkout());
console.log(kit.describe());
kit.returnItem();
console.log(kit.describe());
```

## What to notice

Remove the return call and run again. Next, build a different **library book** checkout model yourself.
