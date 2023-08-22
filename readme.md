## Consegna

Copiamo la griglia fatta ieri

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.

Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.

## svolgimento

- copio la vecchia griglia di campo minato (fatto)

- al click del bottone che genera la griglia:
  - scelgo 16x numeri casuali compresi tra 1 e il totale delle celle della partita in corso.
    - creo una funzione che riceve il totale delle celle e crea un array di 16 elementi casuali
  - ++alla creazione delle celle++ verifico che il valore della cella sia uguale a uno dei numeri dell'array bombe. se si, la casella ha una bomba (aggiungo la classe bomba alla casella).
- al click delle celle
  - **se** la cella non ha la classe bomba
    - tingo di azzurro e incremento il contatore punteggio di +1
    - **se** contatore di punteggio è pari a totale celle -16
      - eseguo le operazioni di fine partita.
  - **altrimenti** la cella ha una bomba
    - tingo di rosso eseguo operazioni di fine partita

## fine partita

- mostro il punteggio raggiunto con un alert.
