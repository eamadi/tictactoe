let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let wins = 0;
let losses = 0;
let ties = 0;

// Function to check for a winner
function checkWinner() {
    // Winning combinations
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];
    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return gameBoard[a];
        }
    }
    return null;
}

// Function to check for a draw
function checkDraw() {
    return gameBoard.every(cell => cell !== '');
}

// Function to handle cell clicks
function cellClicked(cellIndex) {
    if (gameBoard[cellIndex] === '' && gameActive) {
        gameBoard[cellIndex] = currentPlayer;
        document.getElementById('game-board').children[cellIndex].innerText = currentPlayer;

        const winner = checkWinner();
        const draw = checkDraw();

        if (winner) {
            gameActive = false;
            document.getElementById('status').innerText = `${winner} wins!`;
            if (winner === 'X') {
                wins++;
            } else {
                losses++;
            }
            updateScoreboard();
        } else if (draw) {
            gameActive = false;
            document.getElementById('status').innerText = 'It\'s a draw!';
            ties++;
            updateScoreboard();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

// Function to reset the game
function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
    document.getElementById('game-board').childNodes.forEach(cell => cell.innerText = '');
}

// Function to update the scoreboard
function updateScoreboard() {
    document.getElementById("score").innerText = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
}
