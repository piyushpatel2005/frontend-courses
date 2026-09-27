const numbers = [1, 2, 3];
const labels = [];
const doubledNumbers = [];

console.log("");

// Supplied Console probes; implement the tasks above to make each checkpoint pass.
try { console.log(`CHECK 1: ${labels.join(", ")}`); } catch (error) { console.log("CHECK pending"); }

// Supplied final-result probe.
try { console.log(`${labels.join(", ")} | ${JSON.stringify(doubledNumbers)}`); } catch (error) { console.log("CHECK pending"); }
