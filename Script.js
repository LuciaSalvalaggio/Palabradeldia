const WORD = 'CRANE'; // Palabra de ejemplo, puedes cambiarla
let currentRow = 0;
let currentCol = 0;

document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const keyboard = document.getElementById('keyboard');

    // Crear celdas del tablero
    for (let i = 0; i < 30; i++) {
        const cell = document.createElement('div');
        gameBoard.appendChild(cell);
    }

    // Crear teclado
    const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    keys.forEach(key => {
        const button = document.createElement('button');
        button.textContent = key;
        button.addEventListener('click', () => handleKeyPress(key));
        keyboard.appendChild(button);
    });

    // Añadir botón de retroceso y enter
    const backspace = document.createElement('button');
    backspace.textContent = '←';
    backspace.addEventListener('click', handleBackspace);
    keyboard.appendChild(backspace);

    const enter = document.createElement('button');
    enter.textContent = 'ENTER';
    enter.addEventListener('click', handleEnter);
    keyboard.appendChild(enter);
});

function handleKeyPress(key) {
    if (currentCol < 5 && currentRow < 6) {
        const index = currentRow * 5 + currentCol;
        const cell = document.querySelector(`#game-board div:nth-child(${index + 1})`);
        cell.textContent = key;
        currentCol++;
    }
}

function handleBackspace() {
    if (currentCol > 0) {
        currentCol--;
        const index = currentRow * 5 + currentCol;
        const cell = document.querySelector(`#game-board div:nth-child(${index + 1})`);
        cell.textContent = '';
    }
}

function handleEnter() {
    if (currentCol === 5) {
        const guess = [];
        for (let i = 0; i < 5; i++) {
            const index = currentRow * 5 + i;
            const cell = document.querySelector(`#game-board div:nth-child(${index + 1})`);
            guess.push(cell.textContent);
        }

        const guessWord = guess.join('');
        if (guessWord === WORD) {
            alert('You guessed it!');
            return;
        }

        currentRow++;
        currentCol = 0;
    }
}
