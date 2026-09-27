function makeCounter() {
  // Return an inner function that remembers count.
}

console.log("");

// Supplied Console probes; implement the tasks above to make each checkpoint pass.
try { console.log(`Counter calls: ${(() => { const c = makeCounter(); return `${c()},${c()}`; })()}`); } catch (error) { console.log("CHECK pending"); }
