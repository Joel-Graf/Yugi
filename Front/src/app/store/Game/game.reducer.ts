import { AppReducer } from "@/store/configureStore";
import * as AppAction from "@/store/actionTypes";

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
      // CRIE O JOGO
      // CRIA CONEXÃO COM WEBSOCKET
      // SALVAR O JOGO NO ESTADO GLOBAL
      // E ENVIAR ATUALIZAÇÃO VIA WEBSOCKET --->> id
      return {
        ...state,
        playerA: { ...state.gameDTO.playerA, monsters: action.payload },
      };
    default:
      return state;
  }
};
