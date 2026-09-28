const user = { name: "Sam", level: 5, active: true };

// TODO 1: Serialize user to JSON string
let userJson = "";

const apiResponse = '{"status":"ok","count":42}';

// TODO 2: Parse apiResponse
let parsed = null;

// TODO 3: deepClone using JSON
function deepClone(obj) {

}

const original = { a: 1, nested: { b: 2 } };
let cloned = null; // Use deepClone(original) here.
try { console.log(`CHECK 3: ${original.nested.b} | ${cloned.nested.b}`); } catch (error) { console.log("CHECK pending"); }
// Change only the copy's nested value here.
try { console.log(`CHECK 4: ${original.nested.b} | ${cloned.nested.b}`); } catch (error) { console.log("CHECK pending"); }

// TODO 5: Display "Sam is level 5 | status: ok, count: 42"
