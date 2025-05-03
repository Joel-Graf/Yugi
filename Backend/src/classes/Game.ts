import { Board } from "./Board";
import { Player } from "./Player";

export class Game {
  playerA: Player;
  playerB?: Player;
  isPlayerTurn: boolean;
  board: Board;
  winner?: Player;

  constructor(
    playerA: Player,
    isPlayerTurn: boolean,
    board: Board,
    playerB?: Player,
    winner?: Player
  ) {
    this.playerA = playerA;
    this.isPlayerTurn = isPlayerTurn;
    this.board = board;
    this.playerB = playerB;
    this.winner = winner;
  }
}
