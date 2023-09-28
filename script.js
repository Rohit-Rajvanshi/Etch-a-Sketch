const gridContainer = document.getElementById("grid");
const sizeValue = document.getElementById("size-value");
const gridSize = document.getElementById("grid-size");
const color=document.getElementById("color")
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

    const gridCells=document.querySelectorAll(".grid-cell")
    gridCells.forEach((gridCell) => {
        gridCell.addEventListener("mouseover", () => {
            gridCell.style.backgroundColor = color.value;
        });
        });


    const reset=document.querySelector(".reset")
    reset.addEventListener("click", () => {
         gridCells.forEach((gridCell) => {
        gridCell.style.backgroundColor = "white";
        });
    });
   
}


createGrid(gridSize.value);


gridSize.addEventListener("input", () => {
    createGrid(gridSize.value);
   document.getElementById("size-value").innerHTML = gridSize.value ;
});

let rainbowActive = false; // Variable to track if rainbow mode is active

function rainbow() {
    const array = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    let arrayIndex = 0;
    const gridCells = document.querySelectorAll(".grid-cell");

    // Remove the color mode event listeners (if any)
    gridCells.forEach((gridCell) => {
        gridCell.removeEventListener("mouseover", colormode);
    });

    gridCells.forEach((gridCell) => {
        gridCell.addEventListener("mousemove", () => {
            if (rainbowActive) {
                gridCell.style.backgroundColor = array[arrayIndex];
                arrayIndex = (arrayIndex + 1) % array.length;
            }
        });
    });

    rainbowActive = true;
}

function colormode() {
    const gridCells = document.querySelectorAll(".grid-cell");

    // Remove the rainbow event listeners (if any)
    gridCells.forEach((gridCell) => {
        gridCell.removeEventListener("mousemove", rainbow);
    });

    gridCells.forEach((gridCell) => {
        gridCell.addEventListener("mouseover", () => {
            gridCell.style.backgroundColor = color.value;
        });
    });

    rainbowActive = false;
}
