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
async function loadDashboard() {

}

globalThis.loadDashboard = loadDashboard;
async function reportDashboard() {
  // Await the dashboard, then log its summary.
}
globalThis.reportDashboard = reportDashboard;
reportDashboard();
