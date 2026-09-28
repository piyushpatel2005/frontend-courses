const room = document.getElementById("room-input");
room.value = "East room";
document.getElementById("current-room").textContent = room.value;
document.getElementById("default-room").textContent = room.getAttribute("value");
const label = document.getElementById("room-label");
document.getElementById("room-node-types").textContent = `${label.nodeType} / ${label.firstChild.nodeType}`;
