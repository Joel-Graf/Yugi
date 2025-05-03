"use client"

import { useEffect, useState } from "react";
import Board from "../../components/game/Board/board";

export default function Game() {
  const [game, setGame] = useState<GameDTO>();

  useEffect(() => {
    const webSocket = new WebSocket("ws://localhost:3001");

    webSocket.onopen = () => {
      webSocket.send(JSON.stringify({ type: "CREATE_SINGLE_PLAYER_GAME", payload: {} }));
    }

    webSocket.onmessage = message => {
      const dataJson = message.data;
      const data = JSON.parse(dataJson);

      if (data.type === "GAME_CREATED") {
        setGame(data.payload.game);
      };
    };
  }, []);

  return (
    game?.board?.tiles
      ? (
        <Board boardTiles={game?.board?.tiles} />
      )
      : (
        <h1>Loading</h1>
      )
  );
}
