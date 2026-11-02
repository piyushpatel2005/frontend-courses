// Task 1: Round upward

const roundedUp = Math.ceil(4.2);

// Supplied check 1: leave this code in place.

try {
  console.log("CHECK 1: " + (roundedUp));
} catch (error) {
  console.log("CHECK 1: pending");
}

// Task 2: Read the fixed UTC year

const launchYear = new Date("2024-05-06T00:00:00Z").getUTCFullYear();

// Supplied check 2: leave this code in place.

try {
  console.log("CHECK 2: " + (launchYear));
} catch (error) {
  console.log("CHECK 2: pending");
}

// Task 3: Separate quantity and year

console.log(`${roundedUp} | ${launchYear}`);
