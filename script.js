const GRID_DIM = 500;
const STARTMODE = 'color'

let sketchColor = STARTMODE

const sketchContainer = document.querySelector('.sketchContainer');
const colorPicker = document.querySelector('#colorPicker');
let slider = document.querySelector('#slider');
let btnColor = document.querySelector('#Color');
let btnEraser = document.querySelector('#Eraser');
let btnRandom = document.querySelector('#Random');

slider.onmousemove = (e) => console.log(e.target.value);
slider.onchange = (e) => console.log(e.target.value);
colorPicker.oninput =  (e) => console.log(e.target.value);
btnColor.onclick = () => sketchMode('color');
btnRandom.onclick = () => sketchMode('rainbow')
btnEraser.onclick = () => sketchMode('erase')
// slider.addEventListener("change", (e) => ) 


function createTile () {
    let dimension = slider.value;

    for (i = 0; i < dimension*dimension; i++){
        const tiles = document.createElement('div');
        tiles.classList.add('tiles');
        tiles.style.width = `${GRID_DIM / dimension}px`;
        tiles.style.height = `${GRID_DIM / dimension}px`;

        tiles.addEventListener('mouseover', paint)
        tiles.addEventListener('mousedown', paint)
        
        sketchContainer.appendChild(tiles);
    }
}  

function sketchMode (sketchColor) {
    if (sketchColor === 'color') {
        btnColor.classList.add('on');
        btnRandom.classList.remove('on');
        btnEraser.classList.remove('on');
    } else if (sketchColor === 'rainbow') {
        btnRandom.classList.add('on');
        btnColor.classList.remove('on');
        btnEraser.classList.remove('on');
    } else if (sketchColor === 'eraser') {
        btnEraser.classList.add('on');
        btnColor.classList.remove('on');
        btnRandom.classList.remove('on');
    }
}

function paint(e) {

}

createTile();