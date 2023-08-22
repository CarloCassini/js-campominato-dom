function generaGriglia(numCelle, contenitoreCelle) {
  // reset di inizio partita
  contenitoreCelle.innerHTML = " ";
  score = 0;
  bombList = new Array();
  //   genero la lista casuale di numeri con la bomba
  bombList = randomNumberRange(1, maxBomb);
  console.log(" bombe " + bombList);

  //   costruisco le celle
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

    if (score == cellsTotal - maxBomb) {
      gameOver();
    }
  });

  container.append(cella);
}

// funzione per liste casuali da range suggerito
function randomNumberRange(min, max) {
  let randomList = new Array();
  let i = 1;

  while (i <= maxBomb) {
    let checkBomb;
    checkBomb = randomNumber(1, max);
    console.log(checkBomb);
    if (!randomList.includes(checkBomb)) {
      randomList.push(checkBomb);
      console.log(randomList);
      i++;
    }
  }

  //   rende l'array di
  return randomList;
}

// funzione per la fine del gioco
function gameOver() {
  alert("fine del gioco, il tuo punteggio : " + score);
}

// numero random tra minimo e massimo
function randomNumber(min, max) {
  if (typeof min !== "number" || typeof max !== "number") {
    throw new Error("Max and Min must be a number");
  }
  return Math.floor(Math.random() * (1 + max - min)) + min;
}
