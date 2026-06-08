const roundedUp = Math.ceil(4.2);
const launchYear = new Date('2024-05-06T00:00:00Z').getUTCFullYear();

document.getElementById("output").textContent = `${roundedUp} | ${launchYear}`;
