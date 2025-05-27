//jose-g315
//etch-a-sketch game logic and DOM manipulation

const sketchPad = document.querySelector(".sketch-pad");
const btnContainer = document.querySelector(".button-container");

function createGrid(size){   
    /* creating grid by making n rows with n tiles in each row 
       based on input size */
    for (i=0;i<size;i++){
        const row = document.createElement('div');
        row.classList.add("row");
        sketchPad.appendChild(row);
        for (j=0;j<size;j++) {
            const tile = document.createElement('div');
            tile.classList.add("tile");
            row.appendChild(tile);
        }
        activatePen();
    }
}

function createRandomColor(){
    let r = Math.random() * (256 - 0) + 0;
    let g = Math.random() * (256 - 0) + 0;
    let b = Math.random() * (256 - 0) + 0;
    let rgb = `rgb(${r},${g},${b})`;
    return rgb;
}

function activatePen(){
    const tiles = document.querySelectorAll(".tile");
    for (const tile of tiles) {
        tile.addEventListener("mouseover", ()=> {
            tile.style.background = createRandomColor();
            })
    };
}

function destroyGrid(){
    const rows = document.querySelectorAll(".row");
    for(const row of rows) {
        row.remove();
    };
}

function resetGrid() {
    const tiles = document.querySelectorAll(".tile");
    for (const tile of tiles) {
        tile.style.background = "whitesmoke";
    };
}

btnContainer.addEventListener("click", (e) => {
    switch(e.target.className) {
        case "reset-button":
            resetGrid();
            break;
        case "new-grid-button":
            let size = prompt("Enter a Grid Size from 2-100");
            // input validation
            if (size >= 2 && size <= 100){
                destroyGrid();
                createGrid(size);
            } else if (size === null) {
                return;
            } else {
                alert("Invalid")
            }
            break;
    }
});

// 16x16 grid created as default
createGrid(16);