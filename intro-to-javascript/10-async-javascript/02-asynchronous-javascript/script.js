function runBroadcast() {
  const messageOrder = ["Start"];
  // Schedule the delayed entry; resolve with the completed array.
  messageOrder.push("End");
}
globalThis.runBroadcast = runBroadcast;
runBroadcast();
