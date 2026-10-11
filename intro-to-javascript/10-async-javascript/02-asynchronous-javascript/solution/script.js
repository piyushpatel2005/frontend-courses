function scheduleDelayed(messageOrder, finish) {
  setTimeout(() => {
    messageOrder.push("Delayed");
    finish();
  }, 0);
}
function logBroadcast(order) {
  console.log(order.join(" | "));
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
