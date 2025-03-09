import { MonsterInfo } from "@/app/constants/constants";
import { createAction } from "@reduxjs/toolkit";

interface StartGamePayload {
  monstersInfo: MonsterInfo[];
}

export const startGame = createAction<StartGamePayload>("game/startGame");
