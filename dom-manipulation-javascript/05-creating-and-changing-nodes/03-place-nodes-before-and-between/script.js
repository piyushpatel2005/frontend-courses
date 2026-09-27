const board = document.querySelector("#notices");
const urgent = document.createElement("li");
urgent.textContent = "Bridge inspection today";
board.prepend(urgent);

const reminder = document.createElement("li");
reminder.textContent = "Bring water";
board.insertBefore(reminder, document.querySelector("#sunday"));
