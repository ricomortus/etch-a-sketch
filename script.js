const gridContainer = document.querySelector('.grid-container');

let userColumn = 16;
let userRow = 16;

setNewGrid();

//Take user input for # squares.
document.querySelector('#submit').onclick = function () {
    eraseGrid();
    let input = document.querySelector('#userInput').value;
    userColumn = input;
    userRow = input;
    setNewGrid();
}

document.querySelector('#erase').onclick = function () {
    eraseGrid();
    setNewGrid();
}

function setNewGrid () {
    for (v = 1; v <= userColumn; v++) {
        // Creates columns
        const divContainer = document.createElement('div');
        divContainer.setAttribute("class", `col-${v}-container`);
        gridContainer.appendChild(divContainer);
        let tempColContainer = document.querySelector(`.col-${v}-container`);
        tempColContainer.style.cssText = `grid-column-start: ${v}`;
        // Creates rows
        for (i = 1; i <= userRow; i++) {
            const div = document.createElement('div');
            div.setAttribute("class", `col-${v}`);
            div.setAttribute("id", `box${i}`);
            tempColContainer.appendChild(div);
            //style individual grid squares 
            div.style.cssText = 
            `height: ${(640 / userColumn) - 2}px; 
            width: ${(640 / userColumn) - 2}px; 
            border: 1px solid black; 
            margin: 0;`;
            //Changes colour when hovered + retain previous CSS
            div.addEventListener ('mouseenter', () => {
                div.style.cssText = 
                `height: ${(640 / userColumn) - 2}px; 
                width: ${(640 / userColumn) - 2}px; 
                border: 1px solid black; 
                margin: 0; 
                background-color: black`
            })
        }
    };
}


//Erase the whole grid
function eraseGrid () {
    eraseGridSquares();
    eraseContainers();
}

//Delete the individual div squares
function eraseGridSquares () {
    for (v = 1; v <= userColumn; v++) {
        // Removes columns
        let rmContainer = document.querySelector(`.col-${v}-container`);
        [...rmContainer.children].forEach(child => rmContainer.removeChild(child));
    }
}

//Delete the column containers
function eraseContainers () {
    let prevContainer = document.querySelector(`.grid-container`);
    [...prevContainer.children].forEach(child => prevContainer.removeChild(child));
}
