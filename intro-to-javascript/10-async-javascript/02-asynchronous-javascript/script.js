function scheduleDelayed(messageOrder, finish) {
  // TODO: Step 1: Complete task 1 for Delayed.
  // Add a timer that appends Delayed, then calls finish.
}
function logBroadcast(order) {
  // TODO: Step 2: Complete task 2 for logBroadcast(order).
  // Log the supplied order separated by " | ".
}
// Supplied: connect the two small helpers and expose them to the checks.
function runBroadcast() {
  return new Promise(resolve => {
    const messageOrder = ["Start"];
    scheduleDelayed(messageOrder, () => {
      logBroadcast(messageOrder);
      resolve(messageOrder);
    });
    messageOrder.push("End");
  });
}
globalThis.scheduleDelayed = scheduleDelayed;
globalThis.logBroadcast = logBroadcast;
runBroadcast();
