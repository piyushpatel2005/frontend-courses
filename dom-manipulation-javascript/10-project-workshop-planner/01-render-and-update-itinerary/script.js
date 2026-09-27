const bookings = [{ name: "Clay wheel", time: "08:30" }, { name: "Glaze lab", time: "13:00" }];
const list = document.querySelector("#sessions");
function paint() {
  list.replaceChildren();
  for (const booking of bookings) {
    const row = document.createElement("li");
    row.textContent = `${booking.time} — ${booking.name}`;
    list.append(row);
  }
}
document.querySelector("#update-session").addEventListener("click", () => {
  bookings[0].time = "09:30";
  paint();
});
paint();
