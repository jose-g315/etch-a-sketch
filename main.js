//jose-g315
//etch-a-sketch game logic and DOM manipulation

function createGrid(size){
    const container = document.querySelector(".sketchPad");
    const rowDiv = [];
    const tileDiv = [];
    // creating grid based on size input
    for (i=0;i<size;i++){
        // creating each row
        rowDiv[i] = document.createElement('div');
        rowDiv[i].classList.add("row");
        for (j=0;j<size;j++) {
            // creating each tile
            tileDiv[i] = document.createElement('div');
            tileDiv[i].classList.add("tile");
            rowDiv[i].append(tileDiv[i]);
        }
        container.append(rowDiv[i]);
        activatePen();
    }
}
// 16x16 grid created as default
createGrid(16);

// event listener wrapped in a function that add the hover class to each tile
function activatePen(){
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => tile.addEventListener("mouseover", ()=> {
    tile.classList.add("hover");
    }));
}

// event listener that destroys old grid and creates a new one
const newGridButton = document.querySelector(".newGridButton");
newGridButton.addEventListener("click", () => {
    const rows = document.querySelectorAll(".row");
    const tiles = document.querySelectorAll(".tile");
    let size = prompt("Enter a Grid Size from 2-100");
    // input validation
    if (size >= 2 && size <= 100){
        // removing all rows and tiles from previous grid
        rows.forEach(row => row.remove());
        tiles.forEach(tile => tile.remove());
        // creating new grid
        createGrid(size);
    } else if (size === null) {
        return;
    } else {
        alert("Invalid")
    }
});

// event listener that resets the current grid
const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", () => {
    const tiles = document.querySelectorAll(".tile");
    // removing hover class which makes the tiles white again
    tiles.forEach(tile => tile.classList.remove("hover"));
    activatePen();
});
