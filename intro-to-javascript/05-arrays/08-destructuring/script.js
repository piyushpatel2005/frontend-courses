// TODO 1: Destructure coords into latitude and longitude
const coords = [40.7128, -74.0060];
// const [latitude, longitude] = ...

// TODO 2: Destructure the first and third stops (skip the middle).
const stops = ["Harbor", "Museum", "Library"];

// TODO 3: swapPair([a, b]) returns [b, a]
function swapPair(pair) {

}

// TODO 4: Log the route and latitude.
console.log("");

// Supplied Console probes; implement the tasks above to make each checkpoint pass.
try { console.log(`CHECK 1: ${latitude} | ${longitude}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`CHECK 2: ${firstStop} | ${lastStop}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`CHECK 3: ${swapPair([1,2]).join(",")} | ${swapPair(["a","b"]).join(",")}`); } catch (error) { console.log("CHECK pending"); }
