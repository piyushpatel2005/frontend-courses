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

// TODO: Implement loadDashboard()
async function loadDashboard() {

}

// Display: "Alex | posts: 3 | unread: 2"
