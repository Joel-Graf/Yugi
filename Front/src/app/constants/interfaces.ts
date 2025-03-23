export interface GameState {
  playerA: PlayerDTO;
  playerB: PlayerDTO;
  playerTurn: PlayerDTO;
  board: BoardDTO;
  winner?: PlayerDTO;
}
