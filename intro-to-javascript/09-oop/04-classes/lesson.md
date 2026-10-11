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
summary: "Model a bank account with its own owner and balance. The workshop-pass example showed why two instances can share methods without sharing their changing data."
seo_title: Classes | Introduction to JavaScript
seo_description: "Model a bank account with its own owner and balance. The workshop-pass example showed why two instances can share methods without sharing their changing data."
seo_keywords: javascript, classes, beginner javascript, programming practice
---

# Classes

Model a bank account with its own owner and balance. The workshop-pass example showed why two instances can share methods without sharing their changing data.

The constructor runs when `new BankAccount(...)` creates an instance. `initialBalance = 0` supplies a default only when that argument is omitted or is `undefined`. `getBalance()` is an ordinary method called with parentheses, not a getter property. Getter syntax comes later. The supplied account deposits 50 and withdraws 30 for the final description; other probes use separate accounts so their balances do not interfere.

A deposit changes state but does not need to return a value here. A withdrawal returns a boolean so its caller can tell whether the balance changed. Check the refusal conditions before subtracting. `toString()` returns a description; it should not log or change the account. This is a learning model, not a production money-handling system.

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

Edit `script.js`, then use **Run** to inspect the supplied checkpoints. Use **Submit** to check your tasks in order. Keep the supplied probes; change only the requested definitions and final logs.

## Your Tasks

1. Initialize each account with its `owner` and `initialBalance` in the constructor.
2. Return the current balance from `getBalance()`.
3. Implement `deposit(amount)` to add positive amounts and leave the balance unchanged otherwise.
4. Implement `withdraw(amount)`: return `false` without changing the balance for nonpositive amounts or insufficient funds; otherwise subtract and return `true`.
5. Return an instance-based description from `toString()` in the format `BankAccount(owner: Alice, balance: $120)` after the supplied transactions.
6. Log the current account description prefixed by `mission result: `; use the account after the supplied deposit and withdrawal.
