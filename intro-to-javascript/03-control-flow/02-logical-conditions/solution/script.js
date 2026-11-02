const hasTicket = true;
const doorOpen = false;
const helpDeskOpen = false;
const volunteerPresent = true;

const canEnter = hasTicket && doorOpen;
console.log(`Step 1: ${canEnter}`);

const canAsk = helpDeskOpen || volunteerPresent;
console.log(`Step 2: ${canAsk}`);

const entryLabel = canEnter ? "Enter" : "Wait";
console.log(`Step 3: ${entryLabel}`);
