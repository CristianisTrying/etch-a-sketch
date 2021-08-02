const container = document.getElementById('container');
const cells = document.getElementsByClassName('cell');

// Making 16 by 16 grid of square divs
function createGrid() {
    for(let i = 0; i < 16**2; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

createGrid();

function changeColor() {
    // Change color of cell being hovered over, permanently
}

// When the user's mouse hovers over a cell, 
cells.forEach(cell => {
    cell.addEventListener('mouseover', function() {
        // Add function used to change color of cell
    })
})
