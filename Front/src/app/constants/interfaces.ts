export interface GameState {
  player1: PlayerDTO;
  player2: PlayerDTO;
  player1Turn: boolean;
  board: BoardDTO;
  winner?: PlayerDTO;
}
