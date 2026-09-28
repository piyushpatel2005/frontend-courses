const agenda = document.querySelector("#agenda");
const welcome = document.createElement("li");
welcome.textContent = "Welcome";
agenda.prepend(welcome);

const questions = document.createElement("li");
questions.textContent = "Questions";
agenda.insertBefore(questions, document.querySelector("#closing"));
