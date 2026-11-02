---
title: "Charging Rack Restock Report"
slug: demo-charging-rack-restock
order: 14
language: javascript
lesson_type: interactive
summary: "The stage crew stores each rack as a `[label, units]` pair. It needs the names of racks below five units, ordered by the smallest quantity first, and a total refill amount."
seo_title: Charging Rack Restock Report Demo | Introduction to JavaScript
seo_description: "The stage crew stores each rack as a `[label, units]` pair. It needs the names of racks below five units, ordered by the smallest quantity first, and a total refill amount."
seo_keywords: javascript array filter sort reduce, array of pairs, restock report
---

# charging rack restock report

The stage crew stores each rack as a `[label, units]` pair. It needs the names of racks below five units, ordered by the smallest quantity first, and a total refill amount.

`filter(callback)` is the one new method here. It returns a new array containing every item whose callback returns true. Unlike `find()`, it keeps all matches; when nothing matches, it returns `[]`.

```javascript run
const racks = [["East", 4], ["West", 8], ["Balcony", 1]];
const target = 5;
const lowRacks = racks.filter(rack => rack[1] < target);
const fewestFirst = lowRacks.slice().sort((a, b) => a[1] - b[1]);
const labels = fewestFirst.map(rack => rack[0]);
const unitsToAdd = fewestFirst.reduce((total, rack) => total + target - rack[1], 0);
console.log(`${labels.join(", ")} | ${unitsToAdd}`);
console.log(JSON.stringify(racks));
```

Run it and trace the intermediate lists. West is excluded. Balcony comes before East because 1 is less than 4. Their deficits are 4 and 1, giving five units to add.

The sort works on a copy, so the second line still shows the original rack order. The inner pairs remain shared; reading their counts is safe, but editing a nested count would affect the original pair too. The next exercise should read pairs without changing them.
