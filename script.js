// const col1Container = document.querySelector('.col-1-container');
// const col2Container = document.querySelector('.col-2-container');

// // Column 1
// for (i = 0; i < 16; i++) {
//     const div = document.createElement('div')
//     div.setAttribute("class", "col col-1");
//     div.setAttribute("id", `box ${i}`);
//     col1Container.appendChild(div);
// }

// //Column 2
// for (i = 0; i < 16; i++) {
//     const div = document.createElement('div')
//     div.setAttribute("class", "col col-2");
//     div.setAttribute("id", `box ${i}`);
//     col2Container.appendChild(div);
// }

// Column 3
for (v = 1; v <= 16; v++) {
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


