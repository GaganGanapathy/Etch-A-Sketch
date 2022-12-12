let click =false;
let color="black"

const container= document.querySelector(".container");
container.addEventListener("click", ()=> {
    click= !click;
})
const button= document.querySelector("#reset");
const random=document.querySelector(".random");
random.addEventListener("click", ()=> {
    color="random"});
const clear= document.querySelector(".clear");
clear.addEventListener("click",()=>{
    color="white";
} )

function setGrid() {
    const size= Number(prompt("Enter the grid Size! "))
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

function mark(e) {
    console.log(this)
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
