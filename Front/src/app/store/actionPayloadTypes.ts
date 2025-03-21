import * as AppAction from "@/store/actionTypes";
import { Action } from "redux";

export interface ActionSTART_SINGLE_PLAYER_GAME extends Action {
  type: typeof AppAction.START_SINGLE_PLAYER_GAME;
  payload: MonsterDTO[];
}

export type AllAppActions = ActionSTART_SINGLE_PLAYER_GAME;
