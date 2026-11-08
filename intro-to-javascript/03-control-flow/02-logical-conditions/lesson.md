---
title: "Logical Conditions"
slug: logical-conditions
order: 2
language: javascript
lesson_type: coding
summary: Combine boolean conditions and distinguish a missing value from a falsy value.
seo_title: Truthiness and combined conditions | Introduction to JavaScript
seo_description: Combine boolean conditions and distinguish a missing value from a falsy value.
seo_keywords: [javascript, logical conditions, beginner programming]
hints:
  - Complete one numbered change and inspect its supplied checkpoint before moving on.
---

# Truthiness and combined conditions

One comparison may not be enough. A guest can enter only when a ticket is valid **and** the door is open. `&&` means both must pass; `||` means either can pass. `!value` negates its truthiness.

```javascript run
const hasPass = true;
const gateOpen = false;
console.log(hasPass && gateOpen);
console.log(hasPass || gateOpen);
console.log(!gateOpen);
console.log(Boolean("false"), Boolean(""));
```

Conditions use **truthiness**, the same conversion as `Boolean(value)`. The falsy values are `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`. Other ordinary values are truthy, including the string `"false"` and empty arrays or objects. A falsy value is not necessarily missing: zero can be a valid count.

`&&` and `||` short-circuit: the right side runs only if it is needed. They return an operand, not necessarily a boolean. `0 || 8` returns 8, whereas `0 ?? 8` keeps zero. Use `??` for a missing-value default. Parenthesize mixed conditions so the grouping is clear; do not mix `??` with `&&` or `||` without parentheses.

The conditional expression `condition ? yesValue : noValue` chooses one value. It will be useful for short labels; use an `if` statement when a branch needs several instructions.

Edit `script.js`. Leave the supplied probes in place; Run after each change and Submit to check the ordered tasks.

## Your Tasks

1. Set `canEnter` with `hasTicket && doorOpen`.
2. Set `canAsk` with `helpDeskOpen || volunteerPresent`.
3. Set `entryLabel` with `canEnter ? "Enter" : "Wait"`.
