function delay(ms, value) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), ms);
  });
}

async function loadMessage() {
  const msg = await delay(10, "Hello Async");
  return msg.toUpperCase();
}

async function safeDivide(a, b) {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}

async function reportBroadcast() {
  const msg = await loadMessage();
  const div = await safeDivide(10, 2);
  console.log(`${msg} | 10/2 = ${div}`);
}
globalThis.reportBroadcast = reportBroadcast;
reportBroadcast();
globalThis.delay = delay;
globalThis.loadMessage = loadMessage;
globalThis.safeDivide = safeDivide;
