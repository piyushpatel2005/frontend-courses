const user = { name: "Sam", level: 5, active: true };
const apiResponse = '{"status":"ok","count":42}';
const original = { a: 1, nested: { b: 2 } };

// Task 1: JSON string contains the user data

let userJson = JSON.stringify(user);

// Supplied check 1: leave this code in place.

try {
  console.log("CHECK 1: " + ((() => { const value = JSON.parse(userJson); return `${typeof userJson} | ${value.name} | ${value.level} | ${value.active}`; })()));
} catch (error) {
  console.log("CHECK 1: pending");
}

// Task 2: Parsed response properties

let parsed = JSON.parse(apiResponse);

// Supplied check 2: leave this code in place.

try {
  console.log("CHECK 2: " + (`${parsed.status} | ${parsed.count}`));
} catch (error) {
  console.log("CHECK 2: pending");
}

// Task 3: Separate nested JSON-safe copy

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
const cloned = deepClone(original);

// Supplied check 3: leave this code in place.

try {
  console.log("CHECK 3: " + (`${original.nested.b} | ${cloned.nested.b} | ${cloned !== original && cloned.nested !== original.nested} | ${deepClone({items:[3,4]}).items.join(",")}`));
} catch (error) {
  console.log("CHECK 3: pending");
}

// Task 4: Copy-only nested update

cloned.nested.b = 99;

// Supplied check 4: leave this code in place.

try {
  console.log("CHECK 4: " + (`${original.nested.b} | ${cloned.nested.b}`));
} catch (error) {
  console.log("CHECK 4: pending");
}

// Task 5: Separate user summary

console.log(`${user.name} is level ${user.level} | status: ${parsed.status}, count: ${parsed.count}`);
