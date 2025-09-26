document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board > div');
    squares.forEach(function(square) {
        square.classList.add('square');
    });


let gameState = Array(9).fill(null);
let currentPlayer = 'X';

squares.forEach(function(square, index) {
    square.addEventListener('click', function() {
            if (!gameState[index] && !checkWin()) {
                gameState[index] = currentPlayer;
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                // Alternate player
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });
});