const siteName = 'Frontend Lab';

function buildLabel() {
  const sectionName = 'Variables';
  return `${siteName} - ${sectionName}`;
}

console.log(`Label: ${buildLabel()}`);
console.log(buildLabel());
