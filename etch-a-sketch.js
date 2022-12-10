const container= document.querySelector(".container");

const size= Number(prompt("Enter the grid Size! "))
container.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr)`);

function mark(e) {
    this.setAttribute('style', 'background-color: black');
}

for(let i=1; i<=size*size; i++) {
    // creating grid
    const grid= document.createElement("div");
    grid.classList.add("grid");
    grid.addEventListener('click', mark);
    container.appendChild(grid);
}