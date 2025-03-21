"use client";

import { startSinglePlayerGame } from "@/store/Game/game.actions";
import Board from "../components/Board/board";
import { useAppDispatch } from "@/hooks";

export default function Game() {
  const dispatch = useAppDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(startSinglePlayerGame([]));
        }}
      >
        START GAME
      </button>
      <Board />
    </>
  );
}
