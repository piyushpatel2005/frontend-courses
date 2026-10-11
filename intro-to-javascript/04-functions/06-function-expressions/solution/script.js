// Step 1

const greetStudent = function (name) { return `Welcome, ${name}!`; };

// Supplied probe: leave this in place.

try {
  console.log(`Welcome test: ${greetStudent("Maya")} | ${greetStudent("Luis")}`);
} catch (error) {
  console.log("Step 1 pending");
}

// Step 2

console.log(greetStudent("Maya"));
