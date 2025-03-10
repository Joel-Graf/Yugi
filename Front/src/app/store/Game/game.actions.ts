import { MonsterDTO } from "@/app/entities/Monster";
import { createAction } from "@reduxjs/toolkit";

interface StartGamePayload {
  monstersDTO: MonsterDTO[];
}

export const startGame = createAction<StartGamePayload>("game/startGame");
