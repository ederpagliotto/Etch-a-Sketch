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
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        } )
        square.style.backgroundColor = "green";
        board.insertAdjacentElement("beforeend", square);
    }
}
populateBoard(16);

document.querySelector(".set").addEventListener("click", () => {
    let boardSize = document.querySelector(".show-size").innerHTML;
    populateBoard(boardSize);
});

function setSize(value) {
    document.querySelector(".show-size").innerHTML = value;
}



   document.querySelector(".clear").addEventListener("click", () => {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    let boardSize = document.querySelector(".show-size").innerHTML;
    populateBoard(boardSize);
   });