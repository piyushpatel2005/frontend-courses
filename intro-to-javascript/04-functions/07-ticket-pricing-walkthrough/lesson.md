---
title: "Demo: Ticket Pricing Walkthrough"
slug: ticket-pricing-walkthrough
order: 7
language: javascript
lesson_type: interactive
summary: "Run a worked example of ticket pricing walkthrough before the practical exercise."
seo_title: "Ticket Pricing Walkthrough | JavaScript Console Demo"
seo_description: "Trace ticket pricing walkthrough step by step with runnable JavaScript console output."
seo_keywords: [javascript, "ticket pricing walkthrough", interactive example]
---

# Ticket Pricing Walkthrough

At a neighborhood concert, a default ticket tier keeps the common case short. One function returns a price; a second function **calls it** and assembles a label. Follow the returned value into the final string.

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
```

Run this, then pass `"standard"` explicitly and compare it with the omitted argument. A default parameter applies only when the argument is omitted or `undefined`; the helper's return value flows into the label. The next exercise composes functions for a different service.
