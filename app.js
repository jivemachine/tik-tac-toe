let cells = document.querySelectorAll("div.row > *");

for(var i = 0; i < cells.length; i++) {
    // if even Display X else O on event
    if(i % 2 != 0) {
        cells[i].addEventListener('click', cellClickedX);
    } else {
        cells[i].addEventListener('click', cellClickedO);
    }
}

function cellClickedX() {
    event.target.textContent = 'X';
}

function cellClickedO() {
    event.target.textContent = 'O';
}

function Refresh() {
    window.parent.location = window.parent.location.href;
}