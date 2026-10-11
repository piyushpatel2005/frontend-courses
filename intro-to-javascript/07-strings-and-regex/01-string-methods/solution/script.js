const phrase = "hello world";

// Task 1: Uppercase transformation

const upperPhrase = phrase.toUpperCase();

// Supplied check 1: leave this code in place.

try {
  console.log("CHECK 1: " + (upperPhrase));
} catch (error) {
  console.log("CHECK 1: pending");
}

// Task 2: Word membership

const hasWorld = phrase.includes("world");

// Supplied check 2: leave this code in place.

try {
  console.log("CHECK 2: " + (`${typeof hasWorld} | ${hasWorld}`));
} catch (error) {
  console.log("CHECK 2: pending");
}

// Task 3: Separate combined result

console.log(`${upperPhrase} | ${hasWorld}`);
