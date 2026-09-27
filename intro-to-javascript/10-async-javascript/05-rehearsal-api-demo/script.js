const getEvent = async () => ({ id: 7, title: "Rehearsal" });
const getActs = async eventId => eventId === 7 ? ["Strings", "Choir"] : [];
const getSeats = async eventId => eventId === 7 ? [1, 2, 3, 4] : [];
async function getRehearsalSummary() {
  try {
    const event = await getEvent();
    const [acts, seats] = await Promise.all([getActs(event.id), getSeats(event.id)]);
    return { title: event.title, actCount: acts.length, seatCount: seats.length };
  } catch {
    return { title: "Unavailable", actCount: 0, seatCount: 0 };
  }
}
getRehearsalSummary().then(data =>
  console.log(`${data.title} | acts: ${data.actCount} | seats: ${data.seatCount}`));
