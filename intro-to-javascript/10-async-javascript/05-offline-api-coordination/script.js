// Offline fixtures; the timers imitate work that finishes later.
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
async function getEvent() {
  await wait(1);
  return { id: 7, title: "Rehearsal" };
}
async function getActs(eventId) {
  await wait(5);
  return eventId === 7 ? ["Strings", "Choir"] : [];
}
async function getSeats(eventId) {
  await wait(1);
  return eventId === 7 ? [1, 2, 3, 4] : [];
}
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
