
let defaultColumns = 16;
container = document.getElementById('container');
resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', resetGrid);
let box; let numBoxes;


createGrid(defaultColumns);
boxListener();

function createGrid(columns) {

  for (let i = 0; i < columns; i++) {
    const row = container.appendChild(document.createElement("div"));
row.className = "row";
    for (let u = 0; u < (columns); u++) {
      const square = document.createElement("div");
      row.appendChild(square);
      square.classList.add("box");
    }
  }
  return boxListener();
}

function resetGrid () {
    let newLenWid;
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    newLenWid = prompt("Choose the length or width of the grid");
    return createGrid(newLenWid);
}

function boxListener () {
let allBoxes = document.querySelectorAll(".box");
allBoxes.forEach(element => {
    element.addEventListener("mouseover", paintBox);
});
}

function paintBox() {
    this.classList.add("boxHovered");
}







