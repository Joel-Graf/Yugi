import { MonsterInfo } from "@/app/entities/Monsters/MonsterInfo";
import { createAction } from "@reduxjs/toolkit";

interface StartGamePayload {
  monstersInfo: MonsterInfo[];
}

export const startGame = createAction<StartGamePayload>("game/startGame");
