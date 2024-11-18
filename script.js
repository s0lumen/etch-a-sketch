const sketchGrid = document.querySelector(".sketchContainer");
let slider = document.querySelector("#slider")


slider.onmousemove = (e) => console.log(e.target.value);
slider.onchange = (e) => console.log(e.target.value);

function sketchBox(size) {
    const box = document.createElement("div");
    box.classList.add("box");
    
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;

    return box;
}

//function sketchGrid(dimension) {
//    for ()
//}