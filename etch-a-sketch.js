let click =false;
let color="black"

const button= document.querySelector("#reset");
const random=document.querySelector(".random");

const input = document.querySelector("#num");
const chosenColor = document.querySelector("#color");
const form = document.querySelector("form")

const clear= document.querySelector(".clear");
const container= document.querySelector(".container");



form.addEventListener("submit", (i) => {
    const newGrid = Number(i.target[0].value);
    if (newGrid) {
        container.innerHTML = ""
        setGrid(newGrid)
    } 
    const newColor = (i.target[1].value);
    console.log(newColor)
    color = newColor

    i.preventDefault();
    input.value=""
    chosenColor.value=""    
    // return [i.target[0].value, i.target[1].value]
})

container.addEventListener("click", ()=> {
    click= !click;
})
random.addEventListener("click", ()=> {
    color="random"});


clear.addEventListener("click",()=>{
    color="white";
} )

function setGrid(grids=25) {
    const size= grids
    container.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr)`);
    for(let i=1; i<=size*size; i++) {
        // creating grid
        const grid= document.createElement("div");
        grid.classList.add("grid");
        grid.addEventListener('mouseover', mark);
        container.appendChild(grid);
    }
}

function randomColor() {
    let x = Math.floor(Math.random() * 256);        // range is 0-255
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    return `rgb(${x},${y},${z})`;
}

function reset() {
    container.innerHTML="";
    setGrid()
}

button.addEventListener("click", reset);

function mark() {
    if(click) {
        if(color== "random") {
            this.style.backgroundColor= randomColor();
        }else if (color==="white"){
            this.removeAttribute("style");
        }else{
            this.style.backgroundColor=color;
        }
    }
}

setGrid();
