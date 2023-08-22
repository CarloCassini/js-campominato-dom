function generaGriglia(numCelle, contenitoreCelle) {
  // reset di inizio partita
  contenitoreCelle.innerHTML = " ";
  score = 0;

  for (let i = 1; i <= numCelle; i++) {
    generaCella(contenitoreCelle, numCelle, i);
  }
}

function generaCella(container, difficulty, i) {
  const cella = document.createElement("div");
  cella.setAttribute("data-index", i);
  cella.classList.add("cella");

  cella.classList.add("cella-" + difficulty);

  cella.innerHTML = i;

  cella.addEventListener("click", () => {
    // se la cella non è cliccata
    if (!cella.classList.contains("cella-cliccata")) {
      cella.classList.add("cella-cliccata");
      // il toggle per togliere il colore
      // cella.classList.toggle("cella-cliccata");
      console.log(cella.innerHTML);
      // incremento del punteggio
      score += 1;
      console.log("score " + score);
    }

    if (score == cellsTotal - 16) {
      console.log("fine del gioco");
    }
  });
  container.append(cella);
}
