const user = { name: "Sam", level: 5, active: true };
const apiResponse = '{"status":"ok","count":42}';
const original = { a: 1, nested: { b: 2 } };

// Task 1: JSON string contains the user data

// TODO: Step 1: Serialize the supplied user object into userJson with JSON.stringify().
let userJson = "";

// Supplied check 1: leave this code in place.

try {
  console.log("CHECK 1: " + ((() => { const value = JSON.parse(userJson); return `${typeof userJson} | ${value.name} | ${value.level} | ${value.active}`; })()));
} catch (error) {
  console.log("CHECK 1: pending");
}

// Task 2: Parsed response properties

// TODO: Step 2: Parse the supplied apiResponse string into parsed with JSON.parse().
let parsed = null;

// Supplied check 2: leave this code in place.

try {
  console.log("CHECK 2: " + (`${parsed.status} | ${parsed.count}`));
} catch (error) {
  console.log("CHECK 2: pending");
}

// Task 3: Separate nested JSON-safe copy

// TODO: Step 3: Complete deepClone(obj) with a JSON round trip for JSON-safe data.
function deepClone(obj) {
  // Return a JSON-safe deep copy.
}
const cloned = deepClone(original);

// Supplied check 3: leave this code in place.

try {
  console.log("CHECK 3: " + (`${original.nested.b} | ${cloned.nested.b} | ${cloned !== original && cloned.nested !== original.nested} | ${deepClone({items:[3,4]}).items.join(",")}`));
} catch (error) {
  console.log("CHECK 3: pending");
}

// Task 4: Copy-only nested update

// Set cloned.nested.b here.

// Supplied check 4: leave this code in place.

// TODO: Step 4: Set only cloned.nested.b to 99, leaving original.nested.b at 2.
try {
  console.log("CHECK 4: " + (`${original.nested.b} | ${cloned.nested.b}`));
} catch (error) {
  console.log("CHECK 4: pending");
}

// Task 5: Separate user summary

// Log the user and response summary here.

// TODO: Step 5: Log Sam is level 5 | status: ok, count: 42 on its own line using user and parsed.
