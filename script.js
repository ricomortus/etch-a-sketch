const gridContainer = document.querySelector('.grid-container');

let userColumn = 16;
let userRow = 16;

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
        div.style.cssText = 'height: 38px; width: 38px; border: 1px solid black; margin: 0';
        tempColContainer.appendChild(div);


        div.addEventListener ('mouseenter', () => {div.style.cssText = 'background-color: grey'})
    }
}


