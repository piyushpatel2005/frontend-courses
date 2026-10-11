// Step 1

const siteName = "Frontend Lab";

// Supplied probe: leave this in place.

try {
  console.log(`Site: ${siteName}`);
} catch (error) {
  console.log("Step 1 pending");
}

// Step 2

function buildLabel() {
  const sectionName = "Variables";
  return `${siteName} - ${sectionName}`;
}

// Supplied probe: leave this in place.

try {
  console.log(`Label: ${buildLabel()}`);
} catch (error) {
  console.log("Step 2 pending");
}

// Step 3

console.log(buildLabel());
