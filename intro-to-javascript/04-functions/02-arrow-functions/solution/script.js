const square = n => n * n;
const celsius = f => Math.round((f - 32) * 5 / 9 * 10) / 10;
const isEven = n => n % 2 === 0;

console.log(`5² = ${square(5)} | 98°F = ${celsius(98)}°C | 4 is even: ${isEven(4)}`);
