const cardArray = [
  {
    name: 'Fries',
    img: 'img/memoryGame/fries.png',
  },

  {
    name: 'Cheeseburger',
    img: 'img/memoryGame/cheeseburger.png',
  },

  {
    name: 'Hotdog',
    img: 'img/memoryGame/hotdog.png',
  },

  {
    name: 'Ice Cream',
    img: 'img/memoryGame/ice-cream.png',
  },

  {
    name: 'Milkshake',
    img: 'img/memoryGame/milkshake.png',
  },

  {
    name: 'Pizza',
    img: 'img/memoryGame/pizza.png',
  },

  {
    name: 'Fries',
    img: 'img/memoryGame/fries.png',
  },

  {
    name: 'Cheeseburger',
    img: 'img/memoryGame/cheeseburger.png',
  },

  {
    name: 'Hotdog',
    img: 'img/memoryGame/hotdog.png',
  },

  {
    name: 'Ice Cream',
    img: 'img/memoryGame/ice-cream.png',
  },

  {
    name: 'Milkshake',
    img: 'img/memoryGame/milkshake.png',
  },

  {
    name: 'Pizza',
    img: 'img/memoryGame/pizza.png',
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#mem-result');
const memTimeLeft = document.querySelector('#mem-timer');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];
let memTimer = 60;

function createBoard() {
  for (let i = 0; i < cardArray.length; i += 1) {
    const card = document.createElement('img');
    card.setAttribute('src', 'img/memoryGame/blank.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    gridDisplay.appendChild(card);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll('#grid img');
  const optOneId = cardsChosenIds[0];
  const optTwoId = cardsChosenIds[1];

  if (optOneId === optTwoId) {
    cards[optOneId].setAttribute('src', 'img/memoryGame/blank.png');
    cards[optTwoId].setAttribute('src', 'img/memoryGame/blank.png');
    // alert('You have clicked the same image!');
    cardsChosen = [];
    cardsChosenIds = [];
    return;
  }

  console.log('Check for match!');
  if (cardsChosen[0] == cardsChosen[1]) {
    // alert('You found a match!');
    cards[optOneId].setAttribute('src', 'img/memoryGame/white.png');
    cards[optTwoId].setAttribute('src', 'img/memoryGame/white.png');
    cards[optOneId].removeEventListener('click', flipCard);
    cards[optTwoId].removeEventListener('click', flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optOneId].setAttribute('src', 'img/memoryGame/blank.png');
    cards[optTwoId].setAttribute('src', 'img/memoryGame/blank.png');
  }
  resultDisplay.textContent = `Pontos: ${cardsWon.length}`;
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    clearInterval(memCountDownTimerId);
    memTimeLeft.textContent = 'Fim de jogo!';
    resultDisplay.textContent = 'Você venceu!';
  }
}

function flipCard() {
  const cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute('src', cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function memoryTimer() {
  memTimer -= 1;
  memTimeLeft.textContent = `Tempo: ${memTimer}`;

  if (memTimer == 0) {
    clearInterval(memCountDownTimerId);
    memTimeLeft.textContent = 'Fim de jogo!';
    resultDisplay.textContent = 'Você perdeu!';
  }
}

let memCountDownTimerId = setInterval(memoryTimer, 1000);
