const live = document.getElementsByClassName("sighting");
const staticList = document.querySelectorAll(".sighting");
const original = Array.from(live);
original.forEach((entry) => {
  entry.textContent += " — checked";
});
const next = document.createElement("li");
next.className = "sighting";
next.textContent = "Heron — new";
document.getElementById("sightings").appendChild(next);
document.getElementById("live-count").textContent = live.length;
document.getElementById("static-count").textContent = staticList.length;
