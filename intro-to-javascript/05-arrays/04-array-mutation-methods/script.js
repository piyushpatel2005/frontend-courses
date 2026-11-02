const queue = ["first", "second"];

// Step 1

// Complete this step here.

// Supplied probe: leave this in place.

// TODO: Step 1: Use queue.push("third") to append the new item before the first probe.
try {
  console.log(`After push: ${queue.join(",")}`);
} catch (error) {
  console.log("Step 1 pending");
}

// Step 2

// TODO: Step 2: Replace the empty string in the removedItem declaration with queue.pop().
const removedItem = "";

// Supplied probe: leave this in place.

try {
  console.log(`After pop: ${queue.join(",")} | ${removedItem}`);
} catch (error) {
  console.log("Step 2 pending");
}

// Step 3

// Complete this step here.

// TODO: Step 3: Log first,second | third using queue.join(",") and removedItem.
