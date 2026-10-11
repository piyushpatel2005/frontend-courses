const queue = ["first", "second"];

// Step 1

queue.push("third");

// Supplied probe: leave this in place.

try {
  console.log(`After push: ${queue.join(",")}`);
} catch (error) {
  console.log("Step 1 pending");
}

// Step 2

const removedItem = queue.pop();

// Supplied probe: leave this in place.

try {
  console.log(`After pop: ${queue.join(",")} | ${removedItem}`);
} catch (error) {
  console.log("Step 2 pending");
}

// Step 3

console.log(`${queue.join(",")} | ${removedItem}`);
