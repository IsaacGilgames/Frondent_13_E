const xConst = 'x';
const oConst = 'o';
let oTurn = false; 


const cellElements = document.querySelectorAll('.cell');
const board = document.getElementById('board');
const restartButton = document.getElementById('restartButton');
const winMessageElement = document.getElementById('winMessage');
const winMessageTextElement = document.getElementById('winMessageText');


const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


startGame();


restartButton.addEventListener('click', startGame);

function startGame() {
    oTurn = false; 
    cellElements.forEach(cell => {
        cell.classList.remove(xConst);
        cell.classList.remove(oConst);
        cell.innerText = ''; 
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true }); 
    });
    winMessageElement.classList.add('hidden'); 
}

function handleClick(e) {
    const cell = e.target;
    const current = oTurn ? oConst : xConst;
    placeMark(cell, current); 

    if (checkWin(current)) {
        endGame(false); 
    } else if (isDraw()) {
        endGame(true); 
    } else {
        swapTurns(); 
    }
}

function endGame(draw) {
    if (draw) {
        winMessageTextElement.innerText = "Döntetlen!";
    } else {
        winMessageTextElement.innerText = `${oTurn ? "Kör" : "X"} nyert!`;
    }
    winMessageElement.classList.remove('hidden'); 

    cellElements.forEach(cell => {
        cell.removeEventListener('click', handleClick);
      });
}

function isDraw() {
    for (let i = 0; i < cellElements.length; i++) {
      const cell = cellElements[i];
      if (!cell.classList.contains(xConst) && !cell.classList.contains(oConst)) {
        return false;
      }
    }
    return true;
  }

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass); 
    cell.innerText = currentClass === xConst ? 'X' : 'O'; 
}

function swapTurns() {
    oTurn = !oTurn; 
}

function checkWin(currentClass) {
    for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
      const combination = WINNING_COMBINATIONS[i];
      let win = true;
      for (let j = 0; j < combination.length; j++) {
        const index = combination[j];
        if (!cellElements[index].classList.contains(currentClass)) {
          win = false;
          break;
        }
      }
      if (win) {
        return true;
      }
    }
    return false;
  }
