const square = n => n * n;
const celsius = f => Math.round((f - 32) * 5 / 9 * 10) / 10;
const isEven = n => n % 2 === 0;

console.log(`5² = ${square(5)} | 98°F = ${celsius(98)}°C | 4 is even: ${isEven(4)}`);

console.log(`Square one: ${square(1)}`);
console.log(`Squares: ${square(5)},${square(3)},${square(0)}`);
console.log(`Freezing: ${celsius(32)}`);
console.log(`Celsius: ${celsius(98)},${celsius(212)}`);
console.log(`Even zero: ${isEven(0)}`);
console.log(`Parity: ${isEven(4)},${isEven(7)}`);
