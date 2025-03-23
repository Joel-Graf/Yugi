import { AppReducer } from "@/store/configureStore";
import * as AppAction from "@/store/actionTypes";
import { GameState } from "@/constants/interfaces";

const initialState: GameState = {
  player1: { id: 1, monsters: [] },
  player2: { id: 2, monsters: [] },
  player1Turn: true,
  board: { tiles: [] },
};

const socket = new WebSocket("ws://localhost:3001");

socket.onopen = () => {
  console.log("Conectado ao servidor!");
  socket.send("Olá, servidor!");
};

export const GameReducer: AppReducer<typeof initialState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case AppAction.START_SINGLE_PLAYER_GAME:
      return {
        ...state,
        player1: { ...state.player1, monsters: action.payload },
      };

    case AppAction.START_SINGLE_PLAYER_GAME:
      return {
        ...state,
        player1: { ...state.player1, monsters: action.payload },
      };

    default:
      return state;
  }
};
