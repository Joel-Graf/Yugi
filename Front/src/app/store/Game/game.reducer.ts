import { AppReducer } from "@/store/configureStore";
import * as AppAction from "@/store/actionTypes";
import { createGame } from "@/api/api";
import { GameDTO } from "../../../../../Backend/src/constants/dtos";

type GameState = {
  gameDTO: GameDTO;
  WebSocket?: WebSocket;
};

const initialState: GameState = {
  gameDTO: {
    playerA: {
      id: 1,
      monsters: [],
    },
  },
};

export const GameReducer: AppReducer<typeof initialState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case AppAction.START_SINGLE_PLAYER_GAME:
      const playerA = {
        ...state.gameDTO.playerA,
        monsters: action.payload,
      };

      const gameToBeCreated: GameDTO = {
        playerA: playerA,
        playerTurn: playerA,
      };

      const gameId = createGame(gameToBeCreated.playerA);

      const game = {
        id: gameId,
        ...gameToBeCreated,
      };

      return {
        ...state,
        GameDTO: game,
      };
    default:
      return state;
  }
};
