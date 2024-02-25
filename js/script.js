const grid = document.querySelector('#grid');
let rainbowMode = false;

function createGrid(size = 16) {
    for (let i = 0; i < size ** 2; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.style.width = `${100 / size}%`;
        tile.style.height = `${100 / size}%`;
        tile.addEventListener('mouseenter', (event) => {
            event.target.style.backgroundColor = selectColor(
                parseFloat(window.getComputedStyle(event.target).backgroundColor.split(',')[3])
            );
        });
        grid.appendChild(tile);
    }
}

function deleteGrid() {
    const tileList = document.querySelectorAll('.tile');

    tileList.forEach((tile) => {
        tile.remove();
    });
}

function changeSize() {
    let newGridSize;
    do {
        newGridSize = prompt('Select new grid size (max 100x100): ');
    } while (newGridSize > 100 || newGridSize < 1);
    deleteGrid();
    createGrid(newGridSize);
}

function resetGrid() {
    const tileList = document.querySelectorAll('.tile');

    tileList.forEach((tile) => {
        tile.style.backgroundColor = '';
    });
    rainbowMode = false;
}

function selectColor(alpha) {
    if (isNaN(alpha)) {
        // Check if alpha is NaN
        alpha = 1;
    }

    if (rainbowMode) {
        console.log(alpha);
        return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
        )}, ${Math.min(alpha + 0.1, 1)})`;
    } else {
        return `rgba(255, 255, 255, ${Math.min(alpha + 0.1, 1)})`;
    }
}

function initialization() {
    const size_btn = document.querySelector('#size_btn');
    size_btn.addEventListener('click', changeSize);
    const reset_btn = document.querySelector('#reset_btn');
    reset_btn.addEventListener('click', resetGrid);
    const rainbow_btn = document.querySelector('#rainbow_btn');
    rainbow_btn.addEventListener('click', () => {
        rainbowMode = !rainbowMode;
    });
    createGrid();
}

initialization();
