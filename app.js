let cells = document.querySelectorAll('div.row > *');

var cnt = 0;
var param = "";
for(let i = 0; i < cells.length; i++) {
    // console.log(cells[i]);
    // console.log(cells[i]);
    // if(cells[i])

    cells[i].addEventListener('click', cellClicked);
    cells[i].addEventListener('click', chkWinner);
    cells[i].addEventListener('click', refreshBoard);
}

// function takes cnt variable and if its odd prints x else print o
// function auto increments cnt upon completion
function cellClicked(ev) {
    console.log(cnt);
    if(cnt % 2 == 0) {
        param = "X";
    } else {
        param = "O";
    }
    ev.target.textContent = param;
    cnt++;
}

// functions checks for winner then displays outcome on the final div
function chkWinner() {
    var d1 = document.getElementById('top-left');
    var d2 = document.getElementById('top-middle');
    var d3 = document.getElementById('top-right');
   
    var d4 = document.getElementById('center-left');
    var d5 = document.getElementById('center-middle');
    var d6 = document.getElementById('center-right');
   
    var d7 = document.getElementById('bottom-left');
    var d8 = document.getElementById('bottom-middle');
    var d9 = document.getElementById('bottom-right');
    
    var final = document.getElementById('final')

    // horizontal checks
    if(d1.innerHTML==='X' && d2.innerHTML==='X' && d3.innerHTML === 'X'){
        final.innerHTML = 'X Wins!';
    } else if(d1.innerHTML==='O' && d2.innerHTML==='O' && d3.innerHTML === 'O'){
        final.innerHTML = 'O Wins!';
    } else if(d4.innerHTML==='X' && d5.innerHTML==='X' && d6.innerHTML === 'X'){
        final.innerHTML = "X Wins!";
    } else if(d4.innerHTML==='O' && d5.innerHTML==='O' && d6.innerHTML === 'O'){
    final.innerHTML = "O Wins!";
    } else if(d7.innerHTML==='X' && d8.innerHTML==='X' && d9.innerHTML === 'X'){
        final.innerHTML = "X Wins!";
    } else if(d7.innerHTML==='O' && d8.innerHTML==='O' && d9.innerHTML === 'O'){
        final.innerHTML = "O Wins!";
    }

    // vertical checks
    else if(d1.innerHTML==='X' && d4.innerHTML==='X' && d7.innerHTML==='X') {
        final.innerHTML = "X Wins!";
    } else if(d1.innerHTML==='O' && d4.innerHTML==='O' && d7.innerHTML==='O') {
        final.innerHTML = "O Wins!";
    } else if(d2.innerHTML==='X' && d5.innerHTML==='X' && d8.innerHTML==='X') {
        final.innerHTML = "X Wins!";
    } else if(d2.innerHTML==='O' && d5.innerHTML==='O' && d8.innerHTML==='O') {
        final.innerHTML = "O Wins!";
    } else if(d3.innerHTML==='X' && d6.innerHTML==='X' && d9.innerHTML==='X') {
        final.innerHTML = "X Wins!";
    } else if(d3.innerHTML==='O' && d6.innerHTML==='O' && d9.innerHTML==='O') {
        final.innerHTML = "O Wins!";
    }

    // oblique checks
    else if(d1.innerHTML==='X' && d5.innerHTML==='X' && d9.innerHTML==='X') {
        final.innerHTML = "X Wins!";
    } else if(d1.innerHTML==='O' && d5.innerHTML==='O' && d9.innerHTML==='O') {
        final.innerHTML = "O Wins!";
    } else if (d3.innerHTML==='X' && d5.innerHTML==='X' && d7.innerHTML==='X') {
        final.innerHTML = "X Wins!";
    } else if (d3.innerHTML==='O' && d5.innerHTML==='O' && d7.innerHTML==='O') {
        final.innerHTML = "O Wins!";
    
    // if all are marked with no matches then draw
    } else if (d1.innerHTML != "" && d2.innerHTML != "" && d3.innerHTML != "" && d4.innerHTML != "" && d5.innerHTML != "" && d6.innerHTML != "" && d7.innerHTML != "" && d8.innerHTML != "" && d9.innerHTML != "") {
        final.innerHTML = "Draw!"
    }

}

// if the div displaying the outcome of the game
// is not empty refresh page after 5 seconds
function refreshBoard() {
    var final = document.getElementById('final');
    console.log(final.innerHTML);
    if(final.innerHTML != "") {
        setTimeout(function () {
            window.location.reload(1);
        }, 5000); // 5 seconds
    }
}