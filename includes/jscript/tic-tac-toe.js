document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board > div');
    const statusDiv = document.getElementById('status');
    const newGameBtn = document.querySelector('.btn');');
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

                if (checkWin()) {
                    statusDiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                    statusDiv.classList.add('you-won');
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });

        square.addEventListener('mouseover', function() {
            if (!gameState[index] && !checkWin()) {
                square.classList.add('hover');
            }
        });

        square.addEventListener('mouseout', function() {
            square.classList.remove('hover');
        });
    });

    newGameBtn.addEventListener('click', function() {
        gameState = Array(9).fill(null);
        currentPlayer = 'X';
        squares.forEach(function(square) {
            square.textContent = '';
            square.classList.remove('X', 'O', 'hover');
        });
        statusDiv.textContent = 'Move your mouse over a square and click to play an X or an O.';
        statusDiv.classList.remove('you-won');
    });

    function checkWin() {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];
        for (const condition of winConditions) {
            const [a, b, c] = condition;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return true;
            }
        }
        return false;
    }
});

