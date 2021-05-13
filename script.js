const choices = ["paper", "rock", "scissors"];
const scoreEl = document.getElementById("score");
const buttons = document.querySelectorAll(".pick");
const main = document.getElementById("main");
const selection = document.getElementById("selection");
const reset = document.getElementById("reset");
const user_select = document.getElementById("user_select");
const computer_select = document.getElementById("computer_select");
const winner = document.getElementById("winner");

// modal buttons
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const modalBtn = document.getElementById("modal");

let score = 0;
let userChoice = undefined;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = button.getAttribute("data-choice");

    checkWinner();
  });
});

reset.addEventListener("click", () => {
  main.style.display = "flex";
  selection.style.display = "none";
});

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

function checkWinner() {
  const computerChoice = pickRandomChoices();

  //update the view
  updateSelection(user_select, userChoice);
  updateSelection(computer_select, computerChoice);

  if (userChoice === computerChoice) {
    //draw
    winner.innerText = "draw";
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    //User won
    updateScore(1);
    winner.innerText = "win";
  } else {
    /// User lost
    updateScore(-1);
    winner.innerText = "lost";
  }

  main.style.display = "none";
  selection.style.display = "flex";
}

function updateScore(value) {
  score += value;

  scoreEl.innerText = score;
}

function pickRandomChoices() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateSelection(selectionEl, choice) {
  //class reset
  selectionEl.classList.remove("btn-paper");
  selectionEl.classList.remove("btn-rock");
  selectionEl.classList.remove("btn-scissors");

  //update img
  const img = selectionEl.querySelector("img");
  selectionEl.classList.add(`btn-${choice}`);
  img.src = `./images/icon-${choice}.svg`;
  img.alt = choice;
}
