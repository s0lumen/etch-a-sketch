const GRID_DIM = 500;

const sketchContainer = document.querySelector('.sketchContainer');
let slider = document.querySelector('#slider')


slider.onmousemove = (e) => console.log(e.target.value);
// slider.onchange = (e) => newValue(e.target.value);
// slider.addEventListener("change", (e) => ) 


function createTile () {
    let dimension = slider.value;

    for (i = 0; i < dimension*dimension; i++){
        const tiles = document.createElement('div');
        tiles.classList.add('tiles');
        tiles.style.width = `${GRID_DIM / dimension}px`;
        tiles.style.height = `${GRID_DIM / dimension}px`;

        sketchContainer.appendChild(tiles);
    }
}  

createTile();