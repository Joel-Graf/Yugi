"use client";

import { useWebSocket } from "../../contexts/WebSocketContext";
import Board from "../../components/Board/board";
import { useEffect } from "react";

type GameProps = {
  searchParams: { id: string };
};

export default function Game({ searchParams }: GameProps) {
  const { sendMessage } = useWebSocket();

  useEffect(() => {
    sendMessage({ type: "join_game", payload: searchParams.id });
  }, [sendMessage, searchParams.id]);

  return (
    <>
      <Board />
    </>
  );
}
