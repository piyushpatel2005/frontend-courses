const user = { name: "Sam", level: 5, active: true };
const userJson = JSON.stringify(user);

const apiResponse = '{"status":"ok","count":42}';
const parsed = JSON.parse(apiResponse);

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

console.log(`CHECK 1: ${userJson}`);
console.log(`CHECK 2: ${parsed.status} | ${parsed.count}`);
const original = { a: 1, nested: { b: 2 } };
const cloned = deepClone(original);
console.log(`CHECK 3: ${original.nested.b} | ${cloned.nested.b}`);
cloned.nested.b = 99;
console.log(`CHECK 4: ${original.nested.b} | ${cloned.nested.b}`);

console.log(`${user.name} is level ${user.level} | status: ${parsed.status}, count: ${parsed.count}`);
