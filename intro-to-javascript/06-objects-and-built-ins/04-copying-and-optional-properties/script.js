const source = { label: "Morning", remaining: 0 };

// TODO: Step 1: Set revised to { ...source, label: "Evening" }, leaving the source label unchanged.
const revised = {};
console.log(`Step 1: ${source.label},${revised.label},${source !== revised}`);

// TODO: Step 2: Set city using source.contact?.city ?? "Unknown".
const city = "";
console.log(`Step 2: ${city}`);

// TODO: Step 3: Set count using source.remaining ?? 5 so zero stays zero.
const count = -1;
console.log(`Step 3: ${count}`);
