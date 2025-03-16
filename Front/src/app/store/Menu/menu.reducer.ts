import { createReducer } from "@reduxjs/toolkit";
import { startGame, endGame } from "./menu.actions";

// // TODO: Interface
const initialState = {
  // player: new Player(1),
  // oponentPlayer: new Player(2),
  // isPlayerTurn: true,
  // board: new Board(),
};

const gameReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(startGame, (state) => {
      console.log(state);
    })
    .addCase(endGame, (state) => {
      console.log(state);
    });
});

export default gameReducer;
