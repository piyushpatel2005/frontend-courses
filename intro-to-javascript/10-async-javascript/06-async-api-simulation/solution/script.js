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

async function loadDashboard() {
  try {
    const user = await globalThis.fetchUser();
    const [posts, notifications] = await Promise.all([
      globalThis.fetchPosts(user.id),
      globalThis.fetchNotifications(user.id),
    ]);
    return {
      userName: user.name,
      postCount: posts.length,
      unreadCount: notifications.filter(n => !n.read).length,
    };
  } catch {
    return {
      userName: "Unknown",
      postCount: 0,
      unreadCount: 0,
    };
  }
}

globalThis.loadDashboard = loadDashboard;
async function reportDashboard() {
  const data = await loadDashboard();
  console.log(`${data.userName} | posts: ${data.postCount} | unread: ${data.unreadCount}`);
}
globalThis.reportDashboard = reportDashboard;
reportDashboard();
