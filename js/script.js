const grid = document.querySelector('#grid');

function createGrid(size = 16) {
    for (let i = 0; i < size ** 2; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.style.width = `${100 / size}%`;
        tile.style.height = `${100 / size}%`;
        tile.addEventListener('mouseenter', (event) => {
            event.target.style.backgroundColor = 'white';
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

    console.log('reset');
    tileList.forEach((tile) => {
        tile.style.backgroundColor = '';
    });
}

function initialization() {
    const size_btn = document.querySelector('#size_btn');
    size_btn.addEventListener('click', changeSize);
    const reset_btn = document.querySelector('#reset_btn');
    reset_btn.addEventListener('click', resetGrid);
    createGrid();
}

initialization();
