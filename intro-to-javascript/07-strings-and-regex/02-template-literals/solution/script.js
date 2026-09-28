function guestSign(name, seat) {
  return `Guest: ${name.trim()}
Seat: ${seat}`;
}

const guest = " Nia ";
const seat = "B12";
console.log(`CHECK sign: ${guestSign(" Lee ", "C4").replace("\n", " | ")}`);console.log(guestSign(guest, seat));
