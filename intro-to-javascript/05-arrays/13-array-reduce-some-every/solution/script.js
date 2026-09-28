let total = [5, 10, 15].reduce((sum, value) => sum + value, 0);
console.log(`CHECK 1: ${total}`);
let hasAdult = [12, 17, 21].some((age) => age >= 18);
console.log(`CHECK 2: ${hasAdult}`);
let allPositive = [1, 2, 3].every((n) => n > 0);
console.log(`CHECK 3: ${allPositive}`);

console.log(`${total} | ${hasAdult} | ${allPositive}`);
