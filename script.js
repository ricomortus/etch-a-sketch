const gridContainer = document.querySelector('.grid-container');

let userColumn = 16;
let userRow = 16;
let gridColor = 'black';
let randomColorChoice = false;

setNewGrid();

//Take user input for # of squares per side and set new grid. Will also take previous colour choice or rainbow color depending on previous selection.
document.querySelector('#userInput').addEventListener('input', () => {
    let input = document.querySelector('#userInput').value;
    if (input <= 100 && randomColorChoice == false) {
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
    } else {
        alert('too big');
    }
});

//Pick custom color
const head = document.querySelector('#color-picker')
head.addEventListener('input', () => {
    gridColor = head.value;
    customColor();
})

//Keep current # squares and clear grid + style button when clicked
const clearButton = document.querySelector('#erase');
clearButton.addEventListener('mousedown', () => {
    clearButton.style.cssText = 'background-color: #ffa200; border: 4px solid #ffa200';
    if(randomColorChoice == false) {
        eraseGrid();
        setNewGrid();
    } else if (randomColorChoice == true) {
        eraseGrid();
        setNewGrid();
        squaresRandomColor();
    } 
});
//styles clear button when click is finished
clearButton.addEventListener('mouseup', () => {
    clearButton.style.cssText = 'background-color: #FFD900';
});

//Reset grid + color
const resetButton = document.querySelector('#reset')
resetButton.addEventListener('mousedown', () => {
    let input = document.querySelector('#userInput');
    input.value = '';
    userColumn = 16;
    userRow = 16;
    head.value = '#000000'
    gridColor = '#000000'
    eraseGrid();
    setNewGrid();
    randomColorChoice = false;
    resetButton.style.cssText = 'background-color: #ffa200; border: 4px solid #ffa200';
});
resetButton.addEventListener('mouseup', () => {
    resetButton.style.cssText = 'background-color: #FFD900';
});


//Random colors button 
const randomColorButton = document.querySelector('#random-color');
randomColorButton.addEventListener('mousedown', () => {
    randomColorChoice = true;
    squaresRandomColor();
    randomColorButton.style.cssText = 'background-color: #ffa200; border: 4px solid #ffa200';
});
randomColorButton.addEventListener('mouseup', () => {
    randomColorButton.style.cssText = 'background-color: #FFD900';
});




//FUNCTIONS
//Create new grid and styles grid + add 'mouseenter' event listener.
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
            `height: ${(600 / userColumn) - 2}px; 
            width: ${(600 / userColumn) - 2}px; 
            border: 1px solid #e6e6e6;
            background-color: #f7f7f7;
            margin: 0;`;
            //Changes colour when hovered + retain previous CSS
            div.addEventListener ('mouseenter', () => {
                div.style.cssText = 
                `height: ${(600 / userColumn) - 2}px; 
                width: ${(600 / userColumn) -2}px; 
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

//Delete individual grid squares
function eraseGridSquares () {
    for (v = 1; v <= userColumn; v++) {
        // Removes columns
        let rmContainer = document.querySelector(`.col-${v}-container`);
        [...rmContainer.children].forEach(child => rmContainer.removeChild(child));
    }
}
//Delete grid column containers
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
                `height: ${(600 / userColumn) - 2}px; 
                width: ${(600 / userColumn) -2 }px; 
                margin: 0; 
                border: 1px solid #e6e6e6;
                background-color: ${randomColor()}`
            })
        };
    };
}

//Change all grid squares to custom color
function customColor () {
    for (v = 1; v <= userColumn; v ++) {
        for (i = 1; i <= userRow; i++) {
            let gridSquare = document.querySelector(`.col-${v}#box${i}`);
            gridSquare.addEventListener ('mouseenter', () => {
                gridSquare.style.cssText = 
                `height: ${(600 / userColumn) - 2}px; 
                width: ${(600 / userColumn) -2 }px; 
                margin: 0; 
                border: 1px solid #e6e6e6;
                background-color: ${gridColor}`
            })
        };
    };
}