const cellsContainer = document.getElementById("contenitore-griglia");
const myButton = document.getElementById("genera-griglia");

let score;
let cellsTotal;

myButton.addEventListener("click", function () {
  const difficulty = parseInt(document.getElementById("difficolta").value);
  cellsTotal = difficulty;

  generaGriglia(cellsTotal, cellsContainer);
});
