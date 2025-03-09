import { createReducer } from "@reduxjs/toolkit";
import { startGame } from "./game.actions";
import { Player } from "@/app/entities/Player";
import { Board } from "@/app/entities/Board";
import { Monster } from "@/app/entities/Monster";

interface GameState {
  player: Player;
  oponentPlayer: Player;
  isPlayerTurn: boolean;
  board: Board;
  winner?: Player;
}

const initialState: GameState = {
  player: new Player(1),
  oponentPlayer: new Player(2),
  isPlayerTurn: true,
  board: new Board(),
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
