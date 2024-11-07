const slider = document.querySelector("#slider");

//sizeSlider.onmousemove = (e) => console.log(e.target.value);

slider.addEventListener("mousemove", (e) => {
    console.log(e.target.value);
});
slider.addEventListener("change", (e) => {
    console.log(e.target.value);
});

