function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchUser() {
  await delay(5);
  return { id: 1, name: "Alex" };
}

async function fetchPosts(userId) {
  await delay(5);
  return [
    { id: 1, userId, title: "Post A" },
    { id: 2, userId, title: "Post B" },
    { id: 3, userId, title: "Post C" },
  ];
}

async function fetchNotifications(userId) {
  await delay(5);
  return [
    { id: 1, userId, read: false },
    { id: 2, userId, read: true },
    { id: 3, userId, read: false },
  ];
}

globalThis.fetchUser = fetchUser;
globalThis.fetchPosts = fetchPosts;
globalThis.fetchNotifications = fetchNotifications;

// TODO: Implement loadDashboard()
// TODO: Step 1: In async loadDashboard(), await globalThis.fetchUser() before starting any dependent lookup.
async function loadDashboard() {
  // TODO: Step 2: Complete task 2 for Promise.all.
  // TODO: Step 3: Complete task 3 for the marked code.
  // TODO: Step 4: Complete task 4 for try.

}

globalThis.loadDashboard = loadDashboard;
async function reportDashboard() {
  // TODO: Step 5: Complete task 5 for reportDashboard().
  // Await the dashboard, then log its summary.
}
globalThis.reportDashboard = reportDashboard;
globalThis.initialDashboard = reportDashboard().catch(error => console.log(`Work incomplete: ${error.message}`));
