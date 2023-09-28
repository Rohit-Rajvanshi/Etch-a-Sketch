const gridContainer = document.getElementById("grid");
const sizeValue = document.getElementById("size-value");
const gridSize = document.getElementById("grid-size");
function createGrid(size) {
    gridContainer.innerHTML = "";
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");

        for (let j = 0; j < size; j++) {
            const gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell");
            gridRow.appendChild(gridCell);
        }

        gridContainer.appendChild(gridRow);
    }
   document.getElementById("size-value").innerHTML=gridSize.value;
}

createGrid(gridSize.value);


gridSize.addEventListener("input", () => {
    createGrid(gridSize.value);
   document.getElementById("size-value").innerHTML = gridSize.value ;
});
