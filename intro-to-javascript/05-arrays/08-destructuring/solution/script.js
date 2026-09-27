const coords = [40.7128, -74.0060];
const [latitude, longitude] = coords;

const stops = ["Harbor", "Museum", "Library"];
const [firstStop, , lastStop] = stops;

function swapPair([a, b]) {
  return [b, a];
}

console.log(`CHECK 1: ${latitude} | ${longitude}`);
console.log(`CHECK 2: ${firstStop} | ${lastStop}`);
console.log(`CHECK 3: ${swapPair([1, 2]).join(",")} | ${swapPair(["a", "b"]).join(",")}`);

console.log(`${firstStop} to ${lastStop} | lat: ${latitude}`);
