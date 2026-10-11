// Step 1

function makeCounter() {
  let count = 0;
  return function () { count += 1; return count; };
}

// Supplied probe: leave this in place.

try {
  const first = makeCounter();
  const second = makeCounter();
  console.log(`Counter calls: ${first()},${first()},${second()},${first()}`);
} catch (error) {
  console.log("Step 1 pending");
}

// Step 2

const counter = makeCounter();
console.log(`${counter()} | ${counter()} | ${counter()}`);
