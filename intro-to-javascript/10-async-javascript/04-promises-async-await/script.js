function delay(ms, value) {
  // TODO: Step 1: Implement delay(ms, value) to fulfill with value only when its ms timer runs.
  // Return a Promise that resolves after a timer.
}
async function loadMessage() {
  // TODO: Step 2: Complete task 2 for loadMessage().
  // Await the delayed message and return uppercase text.
}
async function safeDivide(a, b) {
  // TODO: Step 3: In async safeDivide(a, b), return the quotient for a nonzero divisor.
  // TODO: Step 4: In the same function, reject zero divisors with Error("Division by zero").
  // Reject zero divisors, otherwise return the quotient.
}
globalThis.delay = delay;
globalThis.loadMessage = loadMessage;
globalThis.safeDivide = safeDivide;
async function reportBroadcast() {
  // TODO: Step 5: Complete task 5 for reportBroadcast().
  // Await both results, then log the broadcast line.
}
globalThis.reportBroadcast = reportBroadcast;
globalThis.initialBroadcast = reportBroadcast().catch(error => console.log(`Broadcast incomplete: ${error.message}`));
