const source = { label: "Morning", remaining: 0 };

const revised = { ...source, label: "Evening" };
console.log(`Step 1: ${source.label},${revised.label},${source !== revised}`);

const city = source.contact?.city ?? "Unknown";
console.log(`Step 2: ${city}`);

const count = source.remaining ?? 5;
console.log(`Step 3: ${count}`);
