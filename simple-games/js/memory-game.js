const cardArray = [
  {
    name: "Fries",
    img: "img/fries.png",
  },

  {
    name: "Cheeseburger",
    img: "img/cheeseburger.png",
  },

  {
    name: "Hotdog",
    img: "img/hotdog.png",
  },

  {
    name: "Ice Cream",
    img: "img/ice-cream.png",
  },

  {
    name: "Milkshake",
    img: "img/milkshake.png",
  },

  {
    name: "Pizza",
    img: "img/pizza.png",
  },

  {
    name: "Fries",
    img: "img/fries.png",
  },

  {
    name: "Cheeseburger",
    img: "img/cheeseburger.png",
  },

  {
    name: "Hotdog",
    img: "img/hotdog.png",
  },

  {
    name: "Ice Cream",
    img: "img/ice-cream.png",
  },

  {
    name: "Milkshake",
    img: "img/milkshake.png",
  },

  {
    name: "Pizza",
    img: "img/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#mem-result");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "img/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const optOneId = cardsChosenIds[0];
  const optTwoId = cardsChosenIds[1];

  if (optOneId == optTwoId) {
    cards[optOneId].setAttribute("src", "img/blank.png");
    cards[optTwoId].setAttribute("src", "img/blank.png");
    alert("You have clicked the same image!");
  }

  console.log("Check for match!");
  if (cardsChosen[0] == cardsChosen[1]) {
    alert("You found a match!");
    cards[optOneId].setAttribute("src", "img/white.png");
    cards[optTwoId].setAttribute("src", "img/white.png");
    cards[optOneId].removeEventListener("click", flipCard);
    cards[optTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optOneId].setAttribute("src", "img/blank.png");
    cards[optTwoId].setAttribute("src", "img/blank.png");
  }
  resultDisplay.textContent = cardsWon.length;
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.textContent = "You win!";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
