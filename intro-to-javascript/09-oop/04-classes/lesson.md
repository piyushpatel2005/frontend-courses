---
title: Classes
slug: classes
order: 4
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Class syntax: `class Name { constructor(...) { this.prop = val; } }`"
  - "Methods go directly in the class body — no commas between them."
  - "Create instances with `new`: `const obj = new MyClass(args);`"
summary: Practice classes with a focused Starline Awards programming mission.
seo_title: Classes | Introduction to JavaScript
seo_description: Learn classes through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, classes, beginner javascript, programming practice
---

# Classes

The workshop-pass demo made separate objects from one class. Now model a bank account in `script.js`, checking each balance change in the Console.

Classes provide syntax for creating independent objects with shared methods. Private fields, getters, and setters come later in this module.

## Basic class

```javascript
class WorkshopSession {
  constructor(topic, seats) {
    this.topic = topic;
    this.seats = seats;
  }
}

console.log(new WorkshopSession("Testing", 12).topic);
```

## Your Tasks

1. Store the owner and starting balance in the `BankAccount` constructor. The starter logs Alice’s owner name.
2. Add `getBalance()` to return the balance; the starter checks the initial balance of 100.
3. Make `deposit(amount)` add positive amounts; the starter deposits 50 into an empty account.
4. Make `deposit(amount)` ignore negative amounts; the starter tries `deposit(-20)` on a balance of 100.
5. Make `withdraw(30)` reduce a balance of 100 to 70 and return `true`. The starter checks both values.
6. Deny an overdraw without changing the balance; the starter tries `withdraw(100)` on 50.
7. Deny nonpositive withdrawals; the starter tries `withdraw(-1)` on 50.
8. Implement `toString()` to return `BankAccount(owner: Alice, balance: $120)` after Alice’s deposit and withdrawal. The starter logs its result.
9. Log `mission result: BankAccount(owner: Alice, balance: $120)` on its own Console line.

