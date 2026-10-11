// Step 1

const square = n => n * n;

// Supplied probe: leave this in place.

try {
  console.log(`Squares: ${square(5)},${square(-3)},${square(0)}`);
} catch (error) {
  console.log("Step 1 pending");
}

// Step 2

const celsius = f => Math.round((f - 32) * 5 / 9 * 10) / 10;

// Supplied probe: leave this in place.

try {
  console.log(`Celsius: ${celsius(32)},${celsius(98)},${celsius(212)},${celsius(-40)}`);
} catch (error) {
  console.log("Step 2 pending");
}

// Step 3

const isEven = n => n % 2 === 0;

// Supplied probe: leave this in place.

try {
  console.log(`Parity: ${isEven(0)},${isEven(4)},${isEven(7)},${isEven(-2)}`);
} catch (error) {
  console.log("Step 3 pending");
}

// Step 4

console.log(`5² = ${square(5)} | 98°F = ${celsius(98)}°C | 4 is even: ${isEven(4)}`);
