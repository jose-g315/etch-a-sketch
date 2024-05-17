//jose-g315
//etch-a-sketch game logic and DOM manipulation

const container = document.querySelector(".container");
const gridDiv = [];
const tileDiv = [];

function createGrid(size){
    for (i=0;i<size;i++){
        gridDiv[i] = document.createElement('div');
        //gridDiv[i].textContent = "ROW";
        gridDiv[i].classList.add("row");
        for (j=0;j<size;j++) {
            tileDiv[i] = document.createElement('div');
            tileDiv[i].textContent = "";
            tileDiv[i].classList.add("tile");
            gridDiv[i].append(tileDiv[i]);
        }
        container.append(gridDiv[i]);
    }
}
createGrid(8);

const tiles = document.querySelectorAll(".tile");   
tiles.forEach(tile => tile.addEventListener("mouseover", ()=> {
    console.log("test");
    tile.classList.add('hover');
    
}));