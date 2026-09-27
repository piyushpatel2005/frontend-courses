const nested = [[1, 2], [3, 4]];
const flatNumbers = [];
const splitWords = [];

console.log("");

// Supplied Console probes; implement the tasks above to make each checkpoint pass.
try { console.log(`CHECK 1: ${JSON.stringify(flatNumbers)}`); } catch (error) { console.log("CHECK pending"); }

// Supplied final-result probe.
try { console.log(`${JSON.stringify(flatNumbers)} | ${JSON.stringify(splitWords)}`); } catch (error) { console.log("CHECK pending"); }
