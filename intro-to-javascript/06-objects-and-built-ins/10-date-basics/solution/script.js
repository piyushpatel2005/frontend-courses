const launchDate = new Date("2024-05-06T00:00:00Z");

// Task 1: UTC year

let year = launchDate.getUTCFullYear();

// Supplied check 1: leave this code in place.

try {
  console.log("CHECK 1: " + (year));
} catch (error) {
  console.log("CHECK 1: pending");
}

// Task 2: One-based UTC month

let month = launchDate.getUTCMonth() + 1;

// Supplied check 2: leave this code in place.

try {
  console.log("CHECK 2: " + (month));
} catch (error) {
  console.log("CHECK 2: pending");
}

// Task 3: UTC day of month

let day = launchDate.getUTCDate();

// Supplied check 3: leave this code in place.

try {
  console.log("CHECK 3: " + (day));
} catch (error) {
  console.log("CHECK 3: pending");
}

// Task 4: Padded date label

console.log(`${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`);
