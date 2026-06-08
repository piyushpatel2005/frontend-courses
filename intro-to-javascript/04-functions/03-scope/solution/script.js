const siteName = 'Frontend Lab';

function buildLabel() {
  const sectionName = 'Variables';
  return `${siteName} - ${sectionName}`;
}

document.getElementById("output").textContent = buildLabel();
