---
title: "Ticket Pricing Walkthrough"
slug: ticket-pricing-walkthrough
order: 7
language: javascript
lesson_type: interactive
summary: "At a neighborhood concert, most visitors buy standard tickets. A default parameter lets the caller omit that common choice."
seo_title: "Ticket Pricing Walkthrough | JavaScript Console Demo"
seo_description: "At a neighborhood concert, most visitors buy standard tickets. A default parameter lets the caller omit that common choice."
seo_keywords: [javascript, "ticket pricing walkthrough", interactive example]
---

# Ticket pricing walkthrough

At a neighborhood concert, most visitors buy standard tickets. A default parameter lets the caller omit that common choice.

In `ticketLabel(name, tier = "standard")`, the default is used when the second argument is missing or `undefined`. Passing `"supporter"` supplies a different value; passing `null` would not activate the default.

```javascript run
function tierPrice(tier) {
  if (tier === "supporter") return 18;
  return 12;
}
function ticketLabel(name, tier = "standard") {
  const price = tierPrice(tier);
  return `${name}: ${tier} ($${price})`;
}
console.log(ticketLabel("Leena"));
console.log(ticketLabel("Omar", "supporter"));
console.log(ticketLabel("Leena", "standard"));
```

Run the block. The first and third lines match: omitting the tier and explicitly choosing standard have the same result. Follow the middle call through `tierPrice`: its returned 18 becomes `price`, which the label inserts into the string.

The next exercise applies this division of work to shipping fees. It adds an express surcharge without repeating the base-fee rule.
