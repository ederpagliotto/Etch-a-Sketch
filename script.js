let pencilColor = "black";
let click = true;
// Determines board size
function populateBoard(size){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.classList.add("board-div")
        square.addEventListener("mouseover", colorSquare);
        board.insertAdjacentElement("beforeend", square);
        square.style.backgroundColor = "white";
    }
}

//Default board size
populateBoard(40);

//Change board size according to value in .show-size element
document.querySelector(".set").addEventListener("click", () => {
    let boardSize = document.querySelector(".show-size").innerHTML;
    populateBoard(boardSize);
});

//Change the value in .show-size element
function setSize(value) {
    document.querySelector(".show-size").innerHTML = value;
}


//Clear the board and shows a new board with the current size
   document.querySelector(".clear").addEventListener("click", () => {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    let boardSize = document.querySelector(".show-size").innerHTML;
    populateBoard(boardSize);
   });

   //Get a random Color
   function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}


function colorSquare() {

    if(click) {
        if (pencilColor == "black") {
            this.style.backgroundColor = "black";
            }
            else if (pencilColor == "white"){
                this.style.backgroundColor = "white";
            }
            else {
                this.style.backgroundColor = getRandomColor();
            }
    }
}

function changeColor(choice) {
    pencilColor = choice;
}

document.querySelector(".board").addEventListener("click", () => {
    click = !click;
})