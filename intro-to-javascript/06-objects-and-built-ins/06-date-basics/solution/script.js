const launchDate = new Date('2024-05-06T00:00:00Z');
let year = launchDate.getUTCFullYear();
let month = launchDate.getUTCMonth() + 1;
let day = launchDate.getUTCDate();

const paddedMonth = String(month).padStart(2, '0');
const paddedDay = String(day).padStart(2, '0');
document.getElementById("output").textContent = `${year}-${paddedMonth}-${paddedDay}`;
