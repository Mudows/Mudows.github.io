const cpuChoiceDisplay = document.getElementById('cpu-choice');
const plrChoiceDisplay = document.getElementById('plr-choice');
const gameResultDisplay = document.getElementById('result');
const nChoices = document.querySelectorAll('.rps-p-choice');
let plrChoice;
let cpuChoice;
let cpuChoiceImg;
let gameResult;

nChoices.forEach((nChoice) =>
  nChoice.addEventListener('click', (e) => {
    plrChoice = e.target.id;
    plrChoiceDisplay.src = e.target.src;
    generateCpuChoice();
    getResult();
  })
);

function generateCpuChoice() {
  const rndNumber = Math.floor(Math.random() * 3) + 1;

  if (rndNumber === 1) {
    cpuChoice = 'Rock';
    cpuChoiceImg = 'img/rps/rock.png';
  }

  if (rndNumber === 2) {
    cpuChoice = 'Paper';
    cpuChoiceImg = 'img/rps/paper.png';
  }

  if (rndNumber === 3) {
    cpuChoice = 'Scissors';
    cpuChoiceImg = 'img/rps/scissor.png';
  }

  cpuChoiceDisplay.src = cpuChoiceImg;
}

function getResult() {
  if (cpuChoice === plrChoice) {
    gameResult = 'Draw!';
  }

  if (
    (cpuChoice === 'Rock' && plrChoice === 'scissors') ||
    (cpuChoice === 'Paper' && plrChoice === 'rock') ||
    (cpuChoice === 'Scissors' && plrChoice === 'paper')
  ) {
    gameResult = 'You lost!';
  }

  if (
    (cpuChoice === 'Scissors' && plrChoice === 'rock') ||
    (cpuChoice === 'Rock' && plrChoice === 'paper') ||
    (cpuChoice === 'Paper' && plrChoice === 'scissors')
  ) {
    gameResult = 'You won!!!';
  }

  gameResultDisplay.innerHTML = gameResult;
}
