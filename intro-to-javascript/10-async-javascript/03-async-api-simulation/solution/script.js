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

async function loadDashboard() {
  try {
    const user = await fetchUser();
    const [posts, notifications] = await Promise.all([
      fetchPosts(user.id),
      fetchNotifications(user.id),
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

(async function run() {
  const data = await loadDashboard();
  document.getElementById("output").textContent =
    `${data.userName} | posts: ${data.postCount} | unread: ${data.unreadCount}`;
})();
