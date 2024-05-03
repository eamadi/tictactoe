# Tic Tac Toe

## Mission Statement: 
Our mission is to provide an immersive and enjoyable gaming experience through our Tic Tac Toe game for all ages. 

## Game Overview:
Tic Tac Toe is a classic two-player game where players take turns marking spaces in a 3x3 grid. The objective of the game is to get three of your marks (either "X" or "O") in a horizontal, vertical, or diagonal row.

## How to Play:
Two players take turns clicking on the cells of the grid to place their marks ("X" or "O"). The game will automatically detect a win or a draw and update the status accordingly. Click the "Reset" button to start a new game.
Scoreboard: The scoreboard located below the game grid displays the current score, including the number of wins, losses, and ties for each player.

## Testing Procedure
We tested each individual functions/methods and ensured they performed their intended tasks correctly, for example checking win conditions, updating the game board, and handling player moves were things we kept track of.

Test Step 1:
* Set up our game board with a winning condition: three X's in a row.
* Call the function to check the win condition.
* Verify that the function returns true.
* Expected Result: The function should return true, indicating that a player has won.

Test Step 2:
* Verify that the function responsible for updating the game board correctly reflects player scores.
* After a game is completed, call the function to update the game board.
* Verify that the game board reflects the player's move.
* Expected Result: The game board should be updated with the player's move.


## Features:
* Two-player gameplay.
* Dynamic updating of player turns and game status.
* Scoreboard to keep track of wins, losses, and ties.
* Reset button to start a new game.

## Files Included:
* index.html: Contains the structure of the game interface using HTML.
* styles.css: Defines the styling rules for the game interface.
* script.js: Implements the game logic and functionality using JavaScript.

## Development Notes:
* script.js file: Game Logic 
    - cell clicks, check for winners, update the scoreboard, reset the game
* styles.css file: Styles for the game interface
* index.html file: Sets up basic layout of webpage

## Contributors: 
* Emilie Amadi and David Sheleru

Feel free to fork this repository and make any modifications or improvements as you see fit! 
