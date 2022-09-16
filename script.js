const gridContainer = document.querySelector('.grid-container');

let userColumn = 16;
let userRow = 16;
let gridColor = 'black';
let randomColorChoice = false;
let customColorChoice = false;

setNewGrid();

//Take user input for # squares and update grid.
document.querySelector('#submit').onclick = function () {
    let input = document.querySelector('#userInput').value;
    if (input <= 100 && randomColorChoice == false && customColorChoice == false) {
        randomColorChoice = false;
        eraseGrid();
        userColumn = input;
        userRow = input;
        setNewGrid();

    } else if (input <= 100 && randomColorChoice == true) {
        eraseGrid();
        userColumn = input;
        userRow = input;
        setNewGrid();
        squaresRandomColor();
    } else if (input <= 100 && customColorChoice == true){
        eraseGrid();
        userColumn = input;
        userRow = input;
        setNewGrid();
        customColor();
    } else {
        alert('too big');
    }
}

//Color picker
const head = document.querySelector('#color-picker')
head.addEventListener('input', () => {
    gridColor = head.value;
    customColor();
})

//Keep current #squares and clear grid.`
document.querySelector('#erase').onclick = function () {
    if(randomColorChoice == false) {
        eraseGrid();
        setNewGrid();
    } else if (randomColorChoice == true) {
        eraseGrid();
        setNewGrid();
        squaresRandomColor();
    } 
}

//Reset grid + color
document.querySelector('#reset').onclick = function () {
    eraseGrid();
    setNewGrid();
    gridColor = 'black';
    randomColorChoice = false;
}

//Random colors
document.querySelector('#random-color').onclick = function () {
    randomColorChoice = true;
    squaresRandomColor();
}

//Create new grid
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
            border: 1px solid #e6e6e6;
            margin: 0;`;
            //Changes colour when hovered + retain previous CSS
            div.addEventListener ('mouseenter', () => {
                div.style.cssText = 
                `height: ${(640 / userColumn) - 2}px; 
                width: ${(640 / userColumn) -2}px; 
                margin: 0; 
                border: 1px solid #e6e6e6;
                background-color: ${gridColor}`
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

//Generate new color
function randomColor () {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    return '#' + randomColor
}

//Change all grid squares to random color
function squaresRandomColor () {
    for (v = 1; v <= userColumn; v ++) {
        for (i = 1; i <= userRow; i++) {
            let gridSquare = document.querySelector(`.col-${v}#box${i}`);
            gridSquare.addEventListener ('mouseenter', () => {
                gridSquare.style.cssText = 
                `height: ${(640 / userColumn) - 2}px; 
                width: ${(640 / userColumn) -2 }px; 
                margin: 0; 
                border: 1px solid #e6e6e6;
                background-color: ${randomColor()}`
            })
        };
    };
}

//Change all grid squares to random color
function customColor () {
    for (v = 1; v <= userColumn; v ++) {
        for (i = 1; i <= userRow; i++) {
            let gridSquare = document.querySelector(`.col-${v}#box${i}`);
            gridSquare.addEventListener ('mouseenter', () => {
                gridSquare.style.cssText = 
                `height: ${(640 / userColumn) - 2}px; 
                width: ${(640 / userColumn) -2 }px; 
                margin: 0; 
                border: 1px solid #e6e6e6;
                background-color: ${gridColor}`
            })
        };
    };
}