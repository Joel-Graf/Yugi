import { createReducer } from '@reduxjs/toolkit';
import { startGame, endGame } from './menu.actions';
import { Player } from '@/app/entities/Player';
import { Board } from '@/app/entities/Board';

interface MenuState {
  
}

const initialState: GameState = {
  player: new Player(1),
  oponentPlayer: new Player(2),
  isPlayerTurn: true,
  board: new Board(),
};

const gameReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(startGame, (state) => {
      // state.score += 1;
    })
    .addCase(endGame, (state) => {
      // state.score -= 1;
    });
});

export default gameReducer;
