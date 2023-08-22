function generaGriglia(numCelle, contenitoreCelle) {
  contenitoreCelle.innerHTML = " ";
  for (let i = 1; i <= numCelle; i++) {
    generaCella(contenitoreCelle, numCelle, i);
  }
}

function generaCella(container, difficulty, i) {
  const cella = document.createElement("div");
  cella.setAttribute("data-index", i);
  cella.classList.add("cella");

  if (difficulty == 100) {
    cella.classList.add("cella-easy");
  } else if (difficulty == 81) {
    cella.classList.add("cella-medium");
  } else {
    cella.classList.add("cella-hard");
  }

  cella.innerHTML = i;

  cella.addEventListener("click", () => {
    cella.classList.add("cella-cliccata");
    // il toggle per togliere il colore
    // cella.classList.toggle("cella-cliccata");
    console.log(cella.innerHTML);
  });
  container.append(cella);
  console.log("test");
}
