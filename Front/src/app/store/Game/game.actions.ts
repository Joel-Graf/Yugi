import { AppDispatch } from "./../configureStore";
import * as Action from "../actionTypes";

export const startSinglePlayerGame =
  (payload: MonsterDTO[]) => (dispatch: AppDispatch) => {
    dispatch({ type: Action.START_SINGLE_PLAYER_GAME, payload });
  };
