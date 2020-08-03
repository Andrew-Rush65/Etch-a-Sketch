const container = document.querySelector('.container'); 
 
// Function that will create grid 
function createGrid(rc) {
    container.style.setProperty('--grid-rows', rc);
    container.style.setProperty('--grid-cols', rc); 
    for (c = 0; c < (rc*rc); c++) {
        let cell = document.createElement('div');
        //Create hover effect 
        cell.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "rgb(0,0,0)";
        });
        container.appendChild(cell).className = 'grid-cell'; 
    };

};

//Function to Reset the Grid
function reset() {

    const cell = [...document.getElementsByClassName('grid-cell') ]; 
    let childRmv = (item) => {
        container.removeChild(item);
    }; 
    cell.forEach(childRmv);
    let gridSize = prompt("How big do you want the grid?", "16");
    let isNum = isNaN(gridSize);
    if (gridSize === null || gridSize === "" || isNum === true) {
        alert("Please insert a number if you want to change the grid size: eg. 16");
        createGrid(16);
    } else {
        createGrid(gridSize); 
    }

}

createGrid(16); 













