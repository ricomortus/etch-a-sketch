const gridContainer = document.querySelector('.grid-container');

for (v = 1; v <= 16; v++) {
    const divContainer = document.createElement('div');
    divContainer.setAttribute("class", `col-${v}-container`);
    gridContainer.appendChild(divContainer);

    let tempColContainer = document.querySelector(`.col-${v}-container`);
    tempColContainer.style.cssText = `grid-column-start: ${v}`;
    
    for (i = 1; i <= 16; i++) {
        const div = document.createElement('div');
        div.setAttribute("class", `col-${v}`);
        div.setAttribute("id", `box${i}`);
        tempColContainer.appendChild(div);

        div.addEventListener ('mouseenter', () => {div.style.cssText = 'background-color: grey'})
    }
}


