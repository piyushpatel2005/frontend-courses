function delay(ms, value) {
  // Return a Promise that resolves after a timer.
}
async function loadMessage() {
  // Await the delayed message and return uppercase text.
}
async function safeDivide(a, b) {
  // Reject zero divisors, otherwise return the quotient.
}
globalThis.delay = delay;
globalThis.loadMessage = loadMessage;
globalThis.safeDivide = safeDivide;
async function reportBroadcast() {
  // Await both results, then log the broadcast line.
}
globalThis.reportBroadcast = reportBroadcast;
reportBroadcast();
