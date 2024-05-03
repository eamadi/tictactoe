// Initialize variables
let currentPlayer = 'X'; // Current player
let gameBoard = ['', '', '', '', '', '', '', '', '']; // Game board
let gameActive = true; // Game state
let wins = 0; // Wins counter
let losses = 0; // Losses counter
let ties = 0; // Ties counter

// Function to check for a winner
function checkWinner() {
    // Define winning combinations
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];
    // Check each winning combination
    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        // If there's a winner, return the symbol
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return gameBoard[a];
        }
    }
    // If no winner, return null
    return null;
}

// Function to check for a draw
function checkDraw() {
    // Check if all cells are filled
    return gameBoard.every(cell => cell !== '');
}

// Function to handle cell clicks
function cellClicked(cellIndex) {
    // Check if the cell is empty and the game is active
    if (gameBoard[cellIndex] === '' && gameActive) {
        // Assign current player's symbol to the clicked cell
        gameBoard[cellIndex] = currentPlayer;
        document.getElementById('game-board').children[cellIndex].innerText = currentPlayer;

        // Check for winner and draw
        const winner = checkWinner();
        const draw = checkDraw();

        // Handle game outcome
        if (winner) {
            // If there's a winner, end the game
            gameActive = false;
            // Update status message
            document.getElementById('status').innerText = `${winner} wins!`;
            // Update wins or losses count
            if (winner === 'X') {
                wins++;
            } else {
                losses++;
            }
            // Update scoreboard
            updateScoreboard();
        } else if (draw) {
            // If it's a draw, end the game
            gameActive = false;
            // Update status message
            document.getElementById('status').innerText = 'It\'s a draw!';
            // Update ties count
            ties++;
            // Update scoreboard
            updateScoreboard();
        } else {
            // If no outcome yet, switch players
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            // Update status message
            document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

// Function to reset the game
function resetGame() {
    // Reset game variables
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    // Update status message
    document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
    // Clear the game board display
    document.getElementById('game-board').childNodes.forEach(cell => cell.innerText = '');
}

// Function to update the scoreboard
function updateScoreboard() {
    // Update scoreboard display
    document.getElementById("score").innerText = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
}
