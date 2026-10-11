// Step 1

function greet(name) { return `Hello, ${name}!`; }

// Supplied probe: leave this in place.

try {
  console.log(`Greeting: ${greet("Alice")} | ${greet("Bob")} | ${greet("")}`);
} catch (error) {
  console.log("Step 1 pending");
}

// Step 2

console.log(`${greet("Alice")} | ${greet("Bob")}`);
