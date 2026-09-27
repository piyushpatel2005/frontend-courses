const liveStations = document.getElementsByClassName("station");
const initialStations = document.querySelectorAll(".station");
const stations = document.getElementById("stations");
Array.from(liveStations).forEach((station) => {
  const name = station.textContent.trim();
  station.textContent = `${name} — staffed`;
  const backup = document.createElement("li");
  backup.className = "station";
  backup.textContent = `${name} — backup`;
  stations.appendChild(backup);
});
document.getElementById("live-count").textContent = liveStations.length;
document.getElementById("static-count").textContent = initialStations.length;
