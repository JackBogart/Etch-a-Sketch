const grid = document.querySelector('#grid');

function initialization() {
    const tileStyle = Math.floor(700 / 16);
    for (let i = 0; i < 16 ** 2; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.setAttribute('style', `height:${tileStyle - 2}px; width:${tileStyle - 2}px;`);
        tile.addEventListener('mouseenter', (event) => {
            event.target.style.backgroundColor = 'white';
        });
        grid.appendChild(tile);
    }
}

initialization();
