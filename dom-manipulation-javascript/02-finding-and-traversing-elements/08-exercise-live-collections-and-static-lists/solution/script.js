const liveStations = document.getElementsByClassName("station");
const initialStations = document.querySelectorAll(".station");
const originalStations = Array.from(liveStations);
const stations = document.getElementById("stations");
originalStations.forEach((station) => {
  station.textContent += " — staffed";
});
originalStations.forEach((station) => {
  const name = station.textContent.replace(" — staffed", "").trim();
  const backup = document.createElement("li");
  backup.className = "station";
  backup.textContent = `${name} — backup`;
  stations.appendChild(backup);
});
document.getElementById("live-count").textContent = liveStations.length;
document.getElementById("static-count").textContent = initialStations.length;
