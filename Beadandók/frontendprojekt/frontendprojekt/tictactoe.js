const main = document.getElementById("main");
let player = "X";
let computer = "O";
let gameStarted = false;
const showPlayer = document.createElement("div");
let emptyCells = [];
let playerCells = [];
let computerCells = [];
let computerTurn = false;
const win = document.createElement("div");
const grid = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function setupTicTacToe() {
    main.innerHTML = "";
    main.id = "tictactoe";
    emptyCells = [...grid];
    grid.forEach((cellIndex) => {
        const cell = document.createElement("div");
        cell.dataset.value = cellIndex;
        cell.classList.add("cell");
        cell.onclick = () => handleCellClick(cell);
        main.appendChild(cell);
    });

    const row = document.createElement("div");
    row.classList.add("row");
    showPlayer.classList.add("show-player");
    showPlayer.innerHTML = "<p> Show player: " + player + "</p>";
    row.appendChild(showPlayer);
    
    const playerswitch = document.createElement("div");
    const button = document.createElement("button");
    button.textContent = "Switch Players";
    button.onclick = () => switchPlayers();
    playerswitch.appendChild(button);
    row.appendChild(playerswitch);
    main.appendChild(row);

    win.classList.add("win");
    win.style.display = "none";
    win.innerHTML = "";
    document.body.appendChild(win);
}

function handleCellClick(cell) {
    if (!gameStarted) gameStarted = true;
    if (!computerTurn && emptyCells.includes(parseInt(cell.dataset.value))) {
        cell.style.color = player === "X" ? "red" : "purple";
        cell.innerHTML = player;
        playerCells.push(parseInt(cell.dataset.value));
        emptyCells.splice(emptyCells.indexOf(parseInt(cell.dataset.value)), 1);
        if (checkWin(playerCells)) {
            win.textContent = "WINNER!";
            win.style.display = "block";
            resetGame();
            return;
        }
        if (emptyCells.length > 0) {
            computerMove();
        } else {
            win.textContent = "TIE!";
            win.style.display = "block";
            resetGame();
        }
    }
}

function switchPlayers() {
    if (!gameStarted) {
        player = player === "X" ? "O" : "X";
        computer = player === "O" ? "X" : "O";
        showPlayer.innerHTML = "<p> Show player: " + player + "</p>";
    }
}

function checkWin(cells) {
    return winningCombinations.some(combination => 
        combination.every(index => cells.includes(index))
    );
}

function computerMove() {
    if (emptyCells.length === 0) return;
    computerTurn = true;
    let computerChoice = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    let cell = document.querySelector(`[data-value="${computerChoice}"]`);

    emptyCells.splice(emptyCells.indexOf(computerChoice), 1);
    computerCells.push(computerChoice);
    
    setTimeout(() => {
        cell.style.color = computer === "X" ? "red" : "purple";
        cell.innerHTML = computer;

        if (checkWin(computerCells)) {
            win.textContent = "LOSER!";
            win.style.display = "block";
            resetGame();
            return;
        }

        if (emptyCells.length === 0) {
            win.textContent = "TIE!";
            win.style.display = "block";
            resetGame();
        }
        computerTurn = false;
    }, 1000);
}

function resetGame() {
    setTimeout(() => {
        win.textContent = "";
        win.style.display = "none";
        playerCells = [];
        computerCells = [];
        emptyCells = [];
        gameStarted = false;
        setupTicTacToe();
    }, 1500);
}
