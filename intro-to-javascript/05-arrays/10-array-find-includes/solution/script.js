const prices = [15, 40, 75, 20];
let firstLargePrice = prices.find((price) => price > 50);
let hasForty = prices.includes(40);

document.getElementById("output").textContent = `${firstLargePrice} | ${hasForty}`;
