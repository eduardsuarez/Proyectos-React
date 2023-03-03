import { WINNER_COMBOS } from "../constants";
export const checkWinnerFrom = (boardToCheck) => {
    // revisamos todas las combinaciones ganadoras para ver si hay X u O ganó
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;

      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    // si non hay ganador
    return null;
  };

  export const checkEndGame = (newBoard)=> {
    //Revisamos si hay un empate
    //si no hay mas espacios vacios en el tablero
    return newBoard.every((Square) => Square !== null);
  }