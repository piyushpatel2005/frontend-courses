function runBroadcast() {
  return new Promise(resolve => {
    const messageOrder = ["Start"];
    setTimeout(() => {
      messageOrder.push("Delayed");
      console.log(messageOrder.join(" | "));
      resolve(messageOrder);
    }, 0);
    messageOrder.push("End");
  });
}
globalThis.runBroadcast = runBroadcast;
runBroadcast();
