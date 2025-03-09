import { createReducer } from "@reduxjs/toolkit";
import { startGame } from "./game.actions";
import { PlayerInfo } from "@/app/entities/Player";
import { BoardInfo } from "@/app/entities/Board";
import { Monster } from "@/app/entities/Monster";

interface GameState {
  player: PlayerInfo;
  oponentPlayer: PlayerInfo;
  isPlayerTurn: boolean;
  board: BoardInfo;
  winner?: PlayerInfo;
}

const initialState: GameState = {
  player: { id: 1, monsters: [] },
  oponentPlayer: { id: 2, monsters: [] },
  isPlayerTurn: true,
  board: { tiles: [] },
};

const gameReducer = createReducer(initialState, (builder) => {
  builder.addCase(startGame, (state, action) => {
    const { monstersInfo } = action.payload;

    const monsters = monstersInfo.map((info) => new Monster(info));
    state.player.monsters = monsters;

    return state;
  });
});

export default gameReducer;
