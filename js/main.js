const cellsContainer = document.getElementById("contenitore-griglia");
const myButton = document.getElementById("genera-griglia");
const maxBomb = 16;

let score;
let cellsTotal;

myButton.addEventListener("click", function () {
  const difficulty = parseInt(document.getElementById("difficolta").value);
  cellsTotal = difficulty;

  generaGriglia(cellsTotal, cellsContainer);
});
