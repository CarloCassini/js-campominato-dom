const cellsContainer = document.getElementById("contenitore-griglia");
const myButton = document.getElementById("genera-griglia");

myButton.addEventListener("click", function () {
  const difficulty = document.getElementById("difficolta").value;
  console.log(difficulty);
  let cellsTotal;
  if (difficulty == 1) {
    cellsTotal = 10 * 10;
  } else if (difficulty == 2) {
    cellsTotal = 9 * 9;
  } else {
    cellsTotal = 7 * 7;
  }

  generaGriglia(cellsTotal, cellsContainer);
});
