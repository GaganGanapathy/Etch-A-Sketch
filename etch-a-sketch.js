const container= document.querySelector(".container");
const button= document.querySelector("#reset");

function setGrid() {
    const size= Number(prompt("Enter the grid Size! "))
    container.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr)`);
    for(let i=1; i<=size*size; i++) {
        // creating grid
        const grid= document.createElement("div");
        grid.classList.add("grid");
        grid.addEventListener('click', mark);
        container.appendChild(grid);
    }
}

function reset() {
    container.innerHTML="";
    setGrid()
}

button.addEventListener("click", reset);

function mark() {
    this.setAttribute('style', 'background-color: black');
}

setGrid();
