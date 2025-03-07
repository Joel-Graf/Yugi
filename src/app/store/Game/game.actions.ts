import { MonsterInfo } from "@/app/entities/Monsters/MonsterInfo";
import { createAction } from "@reduxjs/toolkit";

interface StartGamePayload {
  monstersInfo: MonsterInfo[];
}

interface EndGamePayload {}

// Create actions with payloads
export const startGame = createAction<StartGamePayload>("game/startGame");
export const endGame = createAction<EndGamePayload>("game/endGame");
