///////////////////////////////////////////// ALEATORIZA A PALETA DE CORES

function randomPalette() {
  const getPalette = document.getElementsByClassName('color');
  getPalette[0].style.backgroundColor = 'black';
  for (let i = 1; i < getPalette.length; i += 1) {
    let randomR = Math.floor(Math.random() * 255);
    let randomG = Math.floor(Math.random() * 255);
    let randomB = Math.floor(Math.random() * 255);
    getPalette[i].style.backgroundColor =
      'rgb(' + randomR + ',' + randomG + ',' + randomB + ')';
  }
}

randomPalette();

///////////////////////////////////////////// SELECIONA A COR A SER USADA

const colorPicker = document.getElementsByClassName('color');
let colorChosen;

for (let i = 0; i < colorPicker.length; i += 1) {
  colorPicker[i].addEventListener('click', selectColor);
}

function selectColor(event) {
  for (let i = 0; i < colorPicker.length; i += 1) {
    colorPicker[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

///////////////////////////////////////////// GERA O GRID DE PIXELS

const pixelBoard = document.getElementById('pixel-board');

function createBoard() {
  let gridInputValue = document.getElementById('board-size').value;
  if (gridInputValue > 50) {
    gridInputValue = 50;
  }
  if (gridInputValue < 5) {
    gridInputValue = 5;
  }
  let boardSize = gridInputValue * gridInputValue;
  pixelBoard.style.width = 42 * gridInputValue + 'px';
  pixelBoard.style.height = 42 * gridInputValue + 'px';

  for (let i = 0; i < boardSize; i += 1) {
    const pixel = document.createElement('div');
    pixel.setAttribute('id', 'pixel' + i);
    pixel.className += 'pixel';
    pixel.addEventListener('click', fillColor);
    pixel.style.backgroundColor = 'white';
    pixelBoard.appendChild(pixel);
  }
}

window.onload = createBoard();
document.getElementById('board-size').value = null;

///////////////////////////////////////////// COLORIR O GRID

function fillColor(event) {
  const element = document.getElementsByClassName('selected')[0];
  const object = window.getComputedStyle(element, null);

  event.target.style.backgroundColor =
    object.getPropertyValue('background-color');
}

///////////////////////////////////////////// RESETAR O GRID

function clearBoard() {
  const pixelsToReset = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelsToReset.length; i += 1) {
    pixelsToReset[i].style.backgroundColor = 'white';
  }
}

///////////////////////////////////////////// GERAR UM GRID NOVO

document.getElementById('generate-board').addEventListener('click', regenBoard);

function regenBoard() {
  const pixelQtd = document.getElementsByClassName('pixel');
  let gridInputValue = document.getElementById('board-size').value;

  if (gridInputValue === '') {
    alert('Board inválido!');
    return;
  }
  while (pixelQtd.length > 0) {
    pixelBoard.removeChild(pixelBoard.firstChild);
  }
  createBoard();
}

///////////////////////////////////////////// ATUALIZA O VALOR DO GRID

// document
//   .getElementById('board-size')
//   .addEventListener('mousemove', labelUpdate);

// function labelUpdate() {
//   document.getElementById('size-label').innerText =
//     document.getElementById('board-size').value;
// }
