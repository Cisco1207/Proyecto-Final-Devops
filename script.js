const matrixBackground = document.querySelector('.matrix-background');
const matrixColumns = 16; // Puedes ajustar el número de columnas

function createMatrix() {
    for (let i = 0; i < matrixColumns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        matrixBackground.appendChild(column);

        let delay = Math.random() * 5;

        for (let j = 0; j < 20; j++) {
            const text = document.createElement('div');
            text.className = 'matrix-text';
            text.innerText = Math.random() > 0.5 ? '1' : '0';
            text.style.animationDelay = `${delay}s`;
            delay += 0.1;
            column.appendChild(text);
        }
    }
}

createMatrix();
