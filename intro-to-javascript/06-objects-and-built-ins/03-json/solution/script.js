const user = { name: "Sam", level: 5, active: true };
const userJson = JSON.stringify(user);

const apiResponse = '{"status":"ok","count":42}';
const parsed = JSON.parse(apiResponse);

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

document.getElementById("output").textContent =
  `${user.name} is level ${user.level} | status: ${parsed.status}, count: ${parsed.count}`;
