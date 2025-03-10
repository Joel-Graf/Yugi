import { createReducer } from "@reduxjs/toolkit";
import { startGame } from "./game.actions";
import { PlayerDTO } from "@/app/entities/Player";
import { BoardDTO } from "@/app/entities/Board";
import { Monster } from "@/app/entities/Monster";

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

    const monsters = monstersDTO.map((info) => new Monster(info));
    state.player.monsters = monsters;

    return state;
  });
});

export default gameReducer;
