import { Board } from "./Board";
import { Player } from "./Player";

export class Game {
  player: Player;
  oponentPlayer: Player;
  isPlayerTurn: boolean;
  board: Board;
  winner?: Player;

  constructor(
    player: Player,
    oponentPlayer: Player,
    isPlayerTurn: boolean,
    board: Board,
    winner?: Player
  ) {
    this.player = player;
    this.oponentPlayer = oponentPlayer;
    this.isPlayerTurn = isPlayerTurn;
    this.board = board;
    this.winner = winner;
  }
}
