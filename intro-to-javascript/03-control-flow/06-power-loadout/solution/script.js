function choosePower(item) {
  switch (item) {
    case "sword": return "Blade burst";
    case "gun": return "Pulse shot";
    case "shield": return "Shield wall";
    default: return "Training mode";
  }
}

console.log(choosePower("shield"));
