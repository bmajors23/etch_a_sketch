// set variables
const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let columns = document.getElementsByClassName("gridColumn");

// create function to create grid
function createGrid(amount) {
    createRows(amount);
    createColumns(amount);
    amount = 260 / rows.length;
    i = 0;
    while (i < rows.length ** 2) {
        document.getElementById(`innerSquare${i}`).style.padding = `${amount - (rows.length/100)}px`;
        i++
};
}

function createRows(rowNumber) {
    for (i = 0; i < rowNumber; i++) {

        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

function createColumns(columnNumber) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < columnNumber; j++) {
        let column = document.createElement("div");
        column.setAttribute("id", `innerSquare${i + (j * rows.length)}`);
        rows[j].appendChild(column).className = "gridColumn";
        };
    };
};

document.getElementById("container").addEventListener("mouseover", myFunction);

function myFunction(event) {
    let square = event.target;
    let red = Math.floor((Math.random() * 256) + 1);
    let green = Math.floor((Math.random() * 256) + 1);
    let blue = Math.floor((Math.random() * 256) + 1);
    return square.style.backgroundColor = `rgb(${red},${green},${blue})`;
    
}

function reset() {
    while(container.firstChild){
        container.removeChild(container.firstChild);
}
    rows = document.getElementsByClassName("gridRow");
    columns = document.getElementsByClassName("gridColumn");
    let answer = prompt("Enter number of rows desired");
    if (answer > 100) {
        alert("Please use a number below 100.")
        answer = prompt("Enter number of rows desired");
    }
    return answer;
}

createGrid(16);

