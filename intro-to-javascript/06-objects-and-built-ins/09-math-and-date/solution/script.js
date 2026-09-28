const roundedUp = Math.ceil(4.2);
console.log(`CHECK 1: ${roundedUp}`);
const launchYear = new Date('2024-05-06T00:00:00Z').getUTCFullYear();
console.log(`CHECK 2: ${launchYear}`);

console.log(`${roundedUp} | ${launchYear}`);
