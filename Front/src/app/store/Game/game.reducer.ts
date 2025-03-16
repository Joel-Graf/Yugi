import { createReducer } from "@reduxjs/toolkit";
import { startGame } from "./game.actions";

interface GameState {
  player: PlayerDTO;
  oponentPlayer: PlayerDTO;
  isPlayerTurn: boolean;
  board: BoardDTO;
  winner?: PlayerDTO;
}

const initialState: GameState = {
  player: { id: 1, monsters: [] },
  oponentPlayer: { id: 2, monsters: [] },
  isPlayerTurn: true,
  board: { tiles: [] },
};

const gameReducer = createReducer(initialState, (builder) => {
  builder.addCase(startGame, (state, action) => {
    const { monstersDTO } = action.payload;

    state.player.monsters = monstersDTO;

    return state;
  });
});

export default gameReducer;
