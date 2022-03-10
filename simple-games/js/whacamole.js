const whacSquares = document.querySelectorAll(".whac-square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#whac-timer");
const whacScore = document.querySelector("#whac-score");

let result = 0;
let hitPosition;
let whacTimer = 60;

function randomSquare() {
  whacSquares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = whacSquares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");

  hitPosition = randomSquare.id;
}

whacSquares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result += 1;
            console.log(result);
            whacScore.textContent = result;
            hitPosition = null;
        }
    })
})

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
    whacTimer--;
    timeLeft.textContent = whacTimer;

    if(whacTimer == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
    }
}

let countDownTimerId =  setInterval(countDown, 1000);