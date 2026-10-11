const introMessage = "JavaScript rocks!";
console.log(`message: ${introMessage}`);
const introNumber = (5 * 3) + 2;
console.log(`number: ${introNumber}`);
document.getElementById("output").textContent = `${introMessage} | ${introNumber}`;

// Supplied checkpoints for this page-based lesson.
window.introCheckpoint = { message: introMessage, number: introNumber };
